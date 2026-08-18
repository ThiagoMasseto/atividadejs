```javascript
const imagesScroll = document.querySelector(".images-scroll");

const images = document.querySelectorAll(".image-item");

const texts = document.querySelectorAll(".text-section");



function atualizarTexto() {

    const centro =
        imagesScroll.getBoundingClientRect().top
        +
        imagesScroll.clientHeight / 2;



    let imagemMaisProxima = null;

    let menorDistancia = Infinity;



    images.forEach((imagem) => {

        const rect = imagem.getBoundingClientRect();

        const centroImagem =
            rect.top
            +
            rect.height / 2;



        const distancia =
            Math.abs(centroImagem - centro);



        if (distancia < menorDistancia) {

            menorDistancia = distancia;

            imagemMaisProxima = imagem;

        }

    });



    if (!imagemMaisProxima) {
        return;
    }



    const secao =
        imagemMaisProxima.dataset.section;



    // Remove o ativo de todas as imagens

    images.forEach((imagem) => {

        imagem.classList.remove("ativo");

    });



    // Ativa a imagem atual

    imagemMaisProxima.classList.add("ativo");



    // Remove o ativo dos textos

    texts.forEach((texto) => {

        texto.classList.remove("ativo");

    });



    // Procura o texto correspondente

    const textoAtual =
        document.getElementById(secao);



    if (textoAtual) {

        textoAtual.classList.add("ativo");

    }

}



// Detecta o scroll

imagesScroll.addEventListener(
    "scroll",
    atualizarTexto
);



// Também atualiza ao carregar

atualizarTexto();



// Permite clicar na imagem

images.forEach((imagem) => {

    imagem.addEventListener(
        "click",
        () => {

            imagem.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

});
```
