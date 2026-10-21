// ===== DEV 1: Tema claro/escuro =====
const check = document.getElementById("dark");

check.addEventListener("change", function () {
    document.body.classList.toggle("light-theme", check.checked);
});

// ===== DEV 1: Menu hambúrguer (celular) =====
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");
    botaoMenu.textContent = aberto ? "✕" : "☰";
    botaoMenu.setAttribute("aria-expanded", aberto);
});