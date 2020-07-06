# Md-links

Markdown é uma linguagem de marcação criada em 2004, com a intenção de simplificar a estruturação de um texto, tornando a leitura e escrita mais simples. 
## 1. Biblioteca Md-links
Essa biblioteca foi desenvolvida com a ideia de ao ser passado o caminho de um arquivo ou de um diretório via CLI,  todos os links sejam encontrados e o usuário possa checar se ele se está funcionando além de obter dados sobre o mesmo.

## 2. Instalação e Desinstalação
Para instalar o projeto, basta abrir qualquer terminal e digitar:

    npm install -g carolpinheiro/md-links
Esse comando irá instalar a biblioteca globalmente, então ela poderá ser usada em qualquer pasta.
Vale ressaltar que alguns sistemas operacionais (Linux, MacOS) podem não funcionar com o comando citado acima, então tente com:

    sudo npm install -g carolpinheiro/md-links

Caso após a utilização, se deseje retirar a biblioteca da máquina, basta digitar:

    npm uninstall -g md-links
No entanto em algumas máquinas, após a instalação, o nome da pasta raiz onde a biblioteca é salva pode se alterar. Por conta disso, caso o comando acima não funcione, recomendamos que digite:

    npm list -g --depth=0
Para que todas as sub-dependências do NPM sejam exibidas, e assim você consiga encontrar a pasta onde o arquivo está instalado. E após obtê-la, basta digitar:

    npm uninstall -g <nome-da-pasta>



## 3. Utilização
Para utilizar a biblioteca, após a instalação, basta digitar:

    md-links <pasta ou arquivo desejado>
Este comando por si só já irá fazer a biblioteca funcionar, contudo se no diretório informado não houver nenhum arquivo Markdown, uma mensagem de erro subirá no console para o usuário informando o ocorrido.

Dentre as opções que a lib oferece, o usuário também poderá conferir se seus links estão funcionando apenas digitando:

    md-links <pasta ou arquivo desejado> --validate
E todos os resultados serão exibidos com o código https que estão retornando no momento e uma mensagem explicando aquilo. Ressaltando que todos os links que não estão funcionando irão aparecer com seus códigos em vermelho.

Caso se deseje saber estatísticas sobre os links, como por exemplo quantos deles são únicos e o total geral do arquivo, basta digitar:

    md-links <pasta ou arquivo desejado> --stats
E se quiser somar nessas estatísticas quantos links daquele total se encontram não funcionando, basta adicionar `--validate` após a solicitação do `--stats`.


## 4. Versões utilizadas dos equipamentos
Neste projeto foram utilizados os seguintes programas, bibliotecas e suas respectivas versões:
[Recursive-readdir](https://www.npmjs.com/package/recursive-readdir)- Versão 0.0.4

[Chalk](https://www.npmjs.com/package/chalk)- Versão 4.1.0

[Node.js](https://nodejs.org/en/)- Versão 12.16.1

[NPM](https://nodejs.org/en/)- Versão 6.14.5

OS - Windows 10 Home

## Autores

Projeto desenvolvido por [Caroline Pinheiro](https://github.com/carolpinheiro) no Bootcamp da [Laboratoria](https://github.com/laboratoria).
