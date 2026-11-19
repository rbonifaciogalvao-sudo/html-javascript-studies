const botao = document.getElementById("botaoEntrega");

function mostrarEntrega() {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Prazo de entrega: 5 dias úteis.";
}
// Tirar o parenteses para funcionar
botao.addEventListener("click", mostrarEntrega());
