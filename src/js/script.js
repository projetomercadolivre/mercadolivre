// 1. BOTÕES DOS CARDS DE PRODUTOS

function mostrarProduto(nome) {
    alert("Você selecionou o produto: " + nome);
}

// 2. CATÁLOGO DE LANÇAMENTOS

// Cada número corresponde a um lançamento.

const lancamentos = {
    1: {
        mes: "Janeiro",
        produto: "E-book: Introdução à Lógica de Programação",
        descricao: "Um guia para iniciantes aprenderem algoritmos."
    },

    2: {
        mes: "Março",
        produto: "Livro: Python para Iniciantes",
        descricao: "Aprenda os conceitos fundamentais e pratique Python."
    },

    3: {
        mes: "Maio",
        produto: "Kit de Desenvolvimento Arduino",
        descricao: "Componentes para criar projetos de eletrônica."
    },

    4: {
        mes: "Julho",
        produto: "E-book: Desenvolvimento Web",
        descricao: "Aprenda HTML, CSS e JavaScript."
    },

    5: {
        mes: "Setembro",
        produto: "Livro: Banco de Dados SQL",
        descricao: "Aprenda a organizar e consultar informações."
    },

    6: {
        mes: "Novembro",
        produto: "Kit de Robótica",
        descricao: "Explore sensores, motores e projetos de automação."
    }
};

// Seleciona os elementos do HTML.

const campoNumero = document.getElementById("numero-lancamento");
const resultado = document.getElementById("resultado");

// Atualiza o resultado enquanto o usuário digita.

campoNumero.addEventListener("input", function () {
    const numero = campoNumero.value;

    // Verifica se o campo está vazio.

    if (numero === "") {
        resultado.textContent =
            "Digite um número de 1 a 6 para consultar um lançamento.";
        return;
    }

    // Procura o lançamento correspondente ao número.

    const lancamento = lancamentos[numero];

    if (lancamento) {
        resultado.innerHTML = `
            <strong>Mês:</strong> ${lancamento.mes}<br>
            <strong>Produto:</strong> ${lancamento.produto}<br>
            <strong>Descrição:</strong> ${lancamento.descricao}
        `;
    } else {
        resultado.textContent =
            "Número inválido! Escolha um número de 1 a 6.";
    }
});
