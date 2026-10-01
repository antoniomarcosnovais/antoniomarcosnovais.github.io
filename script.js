
/* Versículos rotativos da página inicial */
document.addEventListener("DOMContentLoaded", function () {
    const versiculos = [
        {
            texto: "Ide por todo o mundo, pregai o evangelho a toda criatura.",
            referencia: "Marcos 16:15"
        },
        {
            texto: "O Senhor é o meu pastor; nada me faltará.",
            referencia: "Salmos 23:1"
        },
        {
            texto: "Tudo posso naquele que me fortalece.",
            referencia: "Filipenses 4:13"
        },
        {
            texto: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.",
            referencia: "Salmos 37:5"
        },
        {
            texto: "Porque para Deus nada é impossível.",
            referencia: "Lucas 1:37"
        },
        {
            texto: "Sede fortes e corajosos; não temais, nem vos assusteis.",
            referencia: "Deuteronômio 31:6"
        }
    ];

    const elemento = document.getElementById("versiculoRotativo");

    if (elemento) {
        const ultimo = localStorage.getItem("ultimoVersiculo");
        let indice = Math.floor(Math.random() * versiculos.length);

        if (ultimo !== null && versiculos.length > 1) {
            indice = (parseInt(ultimo) + 1) % versiculos.length;
        }

        elemento.innerHTML =
            "“" + versiculos[indice].texto + "”<br>" +
            "<strong>" + versiculos[indice].referencia + "</strong>";

        localStorage.setItem("ultimoVersiculo", indice);
    }
});

