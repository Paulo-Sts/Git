# Git-e-Github
Aprendendo a usar o sistema de controle de versão Git.

## Instalação do git
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

#### Controle de Versão Local
  É um sistema que gerencia versões através de um banco de dados local, armazenado em um único computador.

#### Controle de Versão Centralizado
  É um sistema que gerencia versões através de um servidor central, esse servidor administra o acesso, mudanças e versões dos arquivos.

#### Controle de Versão Distribuído
  É um sistema em que cada usuário trabalha com uma cópia dos arquivos localmente, também gerencia as versões de modo independente. Ao mesmo tempo todos os usuários estão integrados ao repositório central externo que interage com as cópias de repositório de cada usuário.

# Versão do Git
* git --version

# Comandos Iniciais

  - Configurar Usuário
    * git config --global user.name "nome"
    * git config --global user.email "email"
 
  - Inicializar o git em um repositório
    * git init
  
  - Estado do Arquivo
    * git status
    
  - Adicionar Arquivo ao Git
    * git add "nome do arquivo"
    * git add . ou * (adiciona vários arquivos)
    
  - Gravar Alterações no Git
    * git commit -m "mensagem" (grava e adiciona uma mensagem)
  
  - Ajuda do Git
    * git help
    * git help "nome do comando para saber sobre"

# Repositórios
Os arquivos de um projeto devem ser guardados em um repositório, para cada repositório de um projeto inicia-se o repositório do git, para guardar as versões de cada arquivo do projeto. O repositório será iniciado no git como o git init.

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
