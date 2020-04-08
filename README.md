# Git-e-Github
Aprendendo a usar o sistema de controle de versão Git.

#### //Instalação do Git
- Baixar o Git em: https://git-scm.com/ 
- Após abrir o instalador: 
  - NEXT
  - Escolher onde será a pasta de instalação --> NEXT
  - Escolher que componentes devem ser instalados --> NEXT
  - Escolher se deve criar uma pasta no menu iniciar para o git --> NEXT
  - Escolher qual editor integrar como padrão com o git --> NEXT
  - Escolher a path (usar o recomendado) --> NEXT
  - Escolher a biblioteca ssl (usar a recomendada) --> NEXT
  - Escolher a conversão de fim de linha (usar o recomendado) --> NEXT
  - Escolher qual o emulador será usado o terminal (usar o recomendado) --> NEXT
  - NEXT
  - NEXT
  - INSTALL
  - FINISH

# Sistema de Controle de Versão

#### //Controle de Versão Local
  É um sistema que gerencia versões através de um banco de dados local, armazenado em um único computador.

#### //Controle de Versão Centralizado
  É um sistema que gerencia versões através de um servidor central, esse servidor administra o acesso, mudanças e versões dos arquivos.

#### //Controle de Versão Distribuído
  É um sistema em que cada usuário trabalha com uma cópia dos arquivos localmente, também gerencia as versões de modo independente. Ao mesmo tempo todos os usuários estão integrados ao repositório central externo que interage com as cópias de repositório de cada usuário.

# Git

#### //Introdução
  É um sistema de controle de versão distribuído, que gerencia as versões através do fluxo de estados dos arquivos. O Git salva uma imagem dos arquivos com suas mudanças em cada versão.

# Estados do Arquivo

#### //Estado Modificado
  Quando o arquivo é modificado, criado ou apagado. Esse é o estágio inicial dos arquivos e nesse estado eles ainda não estão salvos no Git.

#### //Estado Preparado
  Quando um arquivo está pronto para ser salvo. Nesse estado ele é adicionado ao Git.

#### //Estado Consolidado
  Quando o arquivo é salvo como uma versão. Nesse estado o Git salva uma imagem daquele arquivo em seu banco de dados local.

# Primeiros Comandos

#### //Versão do Git
  * git --version

#### //Configurar Nome do Usuário
  * git config --global user.name "nome"

#### //Configurar Email do Usuário
  * git config --global user.email "email"

#### //Configurar Editor de Texto do Usuário
  * git config --global core.editor "editor"

#### //Acessar Configurações do Usuário
  * git config --global configuração_desejada

#### //Inicializar o Git em Um repositório
  * git init
  
#### //Criar Repositório e Inicializar o Git 
  * git init nome_repositório

#### //Acessar Estado do Arquivo
  * git status
    
#### //Adicionar Um Arquivo ao Git
  * git add nome_arquivo

#### //Adicionar Todos os Arquivos ao Git
  * git add . 
    
#### //Salvar Arquivos no Git
  * git commit -m "mensagem" 
  
#### //Adicionar e Salvar Arquivos no Git
  * git commit -a -m "mensagem" 

#### //Ajuda do Git
  * git help

#### //Ignorar Arquivos
  - Cria-se um arquivo com o nome .gitignore no diretório principal do projeto, com os nomes dos arquivos e pastas a serem ignorados pelo controle de versão do git. Esse arquivo deve ser salvo no git.
  * .gitignore

# Histórico e Versões

- Históricos de commits
  * git log
  * git log nome_arquivo (consulta um arquivo específico)
  
- Alterações detalhadas de arquivos
  * git show (mostra as últimas alterações)
  * git show nome_commit (mostra as alterações detalhadas de um arquivo
  
# Comparação de Alterações
Podemos verificar alterações feitas em arquivos que estamos trabalhando e as comparar com versões que já estão salvas.

- Comparação de Alterações
  * git diff (mostra alterações em todos os arquivos)
  * git diff nome_arquivo (mostra alterações em um arquivo específico)
  
# Apagar Arquivos
- Apaga um Arquivo
  * git rm nome_arquivo

# Reverter Commit
- Reverte commit
  * git revert nome do commit
  * git revert head (revert o último commit)
