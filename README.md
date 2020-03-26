# Git-e-Github
Aprendendo a usar o sistema de controle de versão Git.

# Sistema de Controle de Versão:
É um sistema que registra e guarda alterações de arquivos, gerenciando suas diversas versões ao longo do tempo.

# Git
É um sistema de controle de versão distribuído, que gerencia as versões através do fluxo de estados dos arquivos. O git salva uma imagem dos arquivos e suas mudanças em cada versão. O git foi desenvolvido por Linus Torvalds e lançado em 2005.

# Github
É um repositório online centralizado, onde pode-se salvar os arquivos e suas versões com o git, compartilhar esses arquivos e trabalhar coletivamente neles.

# Sistema de Três Estados de Arquivo
Um arquivo no git é dividido em estados. Estado modificado(ainda não está salvo no git), estado preparado(adicionado ao git para ser versionado) e estado consolidado(versão do arquivo salva no git).

# Instalação do git
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
