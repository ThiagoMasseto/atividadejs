```javascript
const imagesScroll = document.querySelector(".images-scroll");

const images = document.querySelectorAll(".image-item");

const texts = document.querySelectorAll(".text-section");


// ==============================
// OBSERVA AS IMAGENS
// ==============================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            // Verifica se a imagem está visível
            if (entry.isIntersecting) {

                // Pega o nome da seção
                const sectionName =
                    entry.target.dataset.section;


                // ==============================
                // ATIVA A IMAGEM
                // ==============================

                images.forEach((image) => {

                    image.classList.remove("ativo");

                });

                entry.target.classList.add("ativo");


                // ==============================
                // MUDA O TEXTO
                // ==============================

                texts.forEach((text) => {

                    text.classList.remove("ativo");

                });


                // Procura o texto correspondente
                const textAtual =
                    document.getElementById(sectionName);


                // Ativa o texto
                if (textAtual) {

                    textAtual.classList.add("ativo");

                }

            }

        });

    },

    {
        // O scroll das imagens será a área observada
        root: imagesScroll,

        // Considera a imagem ativa quando
        // pelo menos 60% dela estiver visível
        threshold: 0.6
    }

);


// ==============================
// COMEÇA A OBSERVAR AS IMAGENS
// ==============================

images.forEach((image) => {

    observer.observe(image);

});


// ==============================
// CLIQUE NA IMAGEM
// ==============================

images.forEach((image) => {

    image.addEventListener("click", () => {

        image.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});
```
