function chamar() {
    var captar = ""
    captar = document.getElementById('cep').value;
    if (captar.length != 8) {
        alert("Erro: Tipo de Dado Inválido")
    }
    else {
        document.getElementById('digito').innerHTML = "https://api.postmon.com.br/v1/cep/" + captar
    }
}