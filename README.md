# Repositório do projeto iChoveu

  Neste projeto, foi desenvolvido um site de previsão do tempo, nele o usuário é capaz de buscar por uma cidade e saber a temperatura atual, e a previsão do tempo dos próximos 7 dias. Para desenvolver o site aplico conhecimentos em JavaScript Assíncrono com a utilização de promises e do fetch para consumir dados diretamente de uma API.

  Caso queira acessar o site: `https://i-choveu.vercel.app/`

# Orientações

<details>
  <summary><strong>‼️ Para executar o projeto</strong></summary><br />

1. Clone o repositório

  * Use o comando: `git clone git@github.com:renanmarquesgarcia/iChoveu.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd iChoveu`

2. Instale as dependências

  * `npm install`.
  
3. Crie uma branch a partir da branch principal

  * Exemplo: `git checkout -b nome-da-sua-branch`

4. Acesso a API

  * Para acessar a API é necessário criar uma conta no [WeatherAPI](https://www.weatherapi.com/signup.aspx) e gerar uma chave de API.
  * Crie um arquivo `.env` na raiz do projeto, copie a chave gerada pela api e cole no arquivo `.env` como valor da variável `VITE_TOKEN`
    * Exemplo: `VITE_TOKEN=chave-gerada-pela-API`

5. Execute o comando `npm run dev` para ver a aplicação funcionando

</details>

