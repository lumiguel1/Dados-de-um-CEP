# PROJETO WEB: Dados de um CEP

> Um programa que retorna valores de um CEP inserido pelo usuário.

  O Programa deve perguntar qual é o CEP que o usuário quer buscar, depois, o programa deve verificar
se a quantidade de caracteres correspondem a de um CEP válido, senão, deve retornar uma mensagem de erro.
Caso o CEP seja válido, o programa deve retornar a, Cidade, Bairro, Estado e Logradouro correspondente.

# Tecnologias Utilizadas
* **_HTML;_**
* **_CSS;_**
* **_JavaScript_**

# Exemplo de Uso
###  Função Validar
```
function validar() {
    // Pega o CEP e inseri na URL da API.
    var cep = document.getElementById('cep');
    var url = "https://api.postmon.com.br/v1/cep/" + cep.value;

    // Pega os elementos de outros campos. 
    var cidade = document.getElementById('cidade');
    var bairro = document.getElementById('bairro');
    var estado = document.getElementById('estado');
    var logradouro = document.getElementById('logradouro');

    // Valida o CEP.
    if (cep.value.length != 8) {
        alert("Erro: Tamanho de CEP inválido!")
    }
    else if(isNaN(parseInt(cep.value))){
        alert("Erro: Tipo de Dado inválido")
    }
    else{
        // Faz o Request da API.
        fetch(url, { method: 'GET' })
            .then(function (response) {
                response.json()
                    .then(function (dado) {
                        cidade.value = dado.cidade
                        bairro.value = dado.bairro
                        estado.value = dado.estado
                        logradouro.value = dado.logradouro
                    });
            })
    }
}
```
![validar](https://github.com/ThiagoLozano/Dados-de-um-CPF/blob/master/Retornando%20Dados%20do%20CEP%20-%20WEB/Screenshot/funcao.PNG)

### Recebe CEP
```
<!-- Busca -->
    <div id="busca">
        <h1>Busque pelo seu CEP</h1>
        <div>
            <input type="text" class="form-control" id="cep" placeholder="Insira seu CEP:" size="70">

            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit" name="" onclick="validar()">Buscar</button>
            </div>

        </div>
    </div>
```
![Caixa de Busca](https://github.com/ThiagoLozano/Dados-de-um-CPF/blob/master/Retornando%20Dados%20do%20CEP%20-%20WEB/Screenshot/busca.PNG)

![Tela](https://github.com/ThiagoLozano/Dados-de-um-CPF/blob/master/Retornando%20Dados%20do%20CEP%20-%20WEB/Screenshot/tela.PNG)

# Bibliotecas e Configurações

### Configurações

* API: https://postmon.com.br/

* Uso da API __POSTMON__ que tem como retorno um arquivo JSON().
```
https://api.postmon.com.br/v1/cep/*cep_a_consultar*
```
