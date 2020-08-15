import requests


class InserirCEP:
    def __init__(self):
        self.cep = str(input('Informe o CEP: '))

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


usuario = InserirCEP()
usuario.ValidarCEP()
