const botao = document.getElementById("cadastrar");

botao.addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const resultado = document.getElementById("resultado");

    if (nome !== "" && email !== "") {
        resultado.textContent = "Cadastro realizado!";
    } else {
        resultado.textContent = "Preencha todos os campos!";
    }
});
