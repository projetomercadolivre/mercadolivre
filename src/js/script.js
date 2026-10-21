const imagens = [
    "src/assets/images.jpg",
    "src/assets/diario de um banana.jpg",
    "src/assets/livro.jpg"
];

let indice = 0;

const elementoImagem = document.getElementById("destaques");


function alternarImagem() {
    indice++;

    
    if (indice >= imagens.length) {
        indice = 0;
    }

   
    elementoImagem.src = imagens[indice];
}


setInterval(alternarImagem, 5000);