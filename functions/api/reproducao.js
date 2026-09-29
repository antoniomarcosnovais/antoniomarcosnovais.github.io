export async function onRequestPost(context) {
    try {
        const dados = await context.request.json();

        const musica = String(dados.musica || "").trim();

        if (!musica) {
            return new Response(
                JSON.stringify({ erro: "Música não informada" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        await context.env.DB.prepare(
            "INSERT INTO reproducoes (musica, data_hora, pais, cidade) VALUES (?, datetime('now'), ?, ?)"
        )
        .bind(
            musica,
            context.request.headers.get("CF-IPCountry") || null,
            null
        )
        .run();

        return new Response(
            JSON.stringify({ ok: true }),
            { headers: { "Content-Type": "application/json" } }
        );

    } catch (erro) {
        return new Response(
            JSON.stringify({ erro: erro.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
