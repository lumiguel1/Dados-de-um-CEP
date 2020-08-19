# PROJETO PYTHON: Dados de um CEP

> Um programa que retorna valores de um CEP inserido pelo usuário.

  O Programa deve perguntar qual é o CEP que o usuário quer buscar, depois, o programa deve verificar
se a quantidade de caracteres correspondem a de um CEP válido, senão, deve retornar uma mensagem de erro.
Caso o CEP seja válido, o programa deve retornar o CEP, Cidade, Bairro, Estado e Logradouro correspondente.

# Tecnologias Utilizadas
* **_PyCharm;_**
* **_Python 3;_**

# Exemplo de Uso
### Classe
```
class InserirCEP:
    def __init__(self):
        self.cep = str(input('Informe o CEP: '))
```
![Classe](https://github.com/ThiagoLozano/Dados-de-um-CPF/blob/master/Screenshot/Classe.PNG)

### Função que valida e retorna os dados
```
    def ValidarCEP(self):
        while len(self.cep) != 8:
            print("\nErro: CEP Inválido. Tente Novamente!")
            self.cep = str(input('Informe o CEP: '))
        else:
            r = requests.get("https://api.postmon.com.br/v1/cep/{}".format(self.cep))
            dados = r.json()
            print("""
CEP: {}
Cidade: {}
Bairro: {}
Estado: {}
Logradouro: {}
    """.format(dados['cep'], dados['cidade'], dados['bairro'], dados['estado'], dados['logradouro']))
```
![Chutando um Valor](https://github.com/ThiagoLozano/Dados-de-um-CPF/blob/master/Screenshot/Funcao.PNG)

# Bibliotecas e Configurações

### Biblioteca Python Utilizada

```
import requests
```
![Biblioteca](https://github.com/ThiagoLozano/Dados-de-um-CPF/blob/master/Screenshot/Biblioteca.PNG)

### Configurações

* API: https://postmon.com.br/

* Uso da API __POSTMON__ que tem como retorno um arquivo JSON().
```
https://api.postmon.com.br/v1/cep/*cep_a_consultar*
```
### Apoio
* https://github.com/lumiguel1

