# Git-e-Github
Aprendendo a usar o sistema de controle de versão Git.

#### //Instalação do Git
- Acessar o site do Git e escolher a versão mais atualizada disponível:
  https://git-scm.com/ 
- Após baixar, executar o instalador seguindo as opções padrão.

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

# Comandos Iniciais

## Ajuda e Orientações

#### //Versão do Git
  * git --version

#### //Ajuda do Git
  * git help

## Configurações de Usuário

#### //Configurar Nome do Usuário
  * git config --global user.name "nome"

#### //Configurar Email do Usuário
  * git config --global user.email "email"

#### //Configurar Editor de Texto do Usuário
  * git config --global core.editor "editor"

#### //Acessar Configurações do Usuário
  * git config --global configuração_desejada

## Inicializar o Git

#### //Inicializar o Git em Um repositório
  * git init
  
#### //Criar Repositório e Inicializar o Git 
  * git init nome_repositório

## Salvando no Repositório Git

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


## //Ignorar Arquivos
  Cria-se um arquivo com o nome .gitignore no diretório principal do projeto, com os nomes dos arquivos e pastas a serem ignorados pelo controle de versão do git. Esse arquivo deve ser salvo no git.
  * .gitignore

# Manipulação de Arquivos

## Histórico de Arquivos Commitados

#### //Histórico de Todos os Commits do Repositório
  * git log

#### //Histórico de um Arquivo Específico
  * git log nome_arquivo (consulta um arquivo específico)
  
####  //Alterações Detalhadas de Arquivos
  * git show (mostra as últimas alterações)
  * git show nome_commit (mostra as alterações detalhadas de um arquivo)

#### //Histórico dos últimos Arquivos do Repositório
  * git log -n numero_de_commits_a_mostrar

#### //Resumo do Histórico de Commits do Repositório
  * git log --oneline 

#### //Resumo das Alterações de Commits 
  * git log --stat

#### //Exibir commit pai
  * git log --parents

#### //Exibir commit que a branch master está apontando
  * git log --decorate

# Alterações nos Arquivos
Podemos verificar alterações feitas em arquivos que estamos trabalhando e as comparar com versões que já estão salvas.

#### //Mudanças não Salvas no Git
  * git diff (mostra alterações em todos os arquivos)
  * git diff nome_arquivo (mostra alterações em um arquivo específico)

#### //Mudanças não Commitadas 
  * git diff --staged

#### //Comparar Dois Commits de Um Arquivo
  * git diff numero_commit_1 : numero_commit_2
  
#### //Apagar Arquivo
  * git rm nome_arquivo

#### //Renomear Arquivo
  * git rm nome_arquivo novo_nome_arquivo

#### //Mover Arquivo
  * git mv nome_arquivo nome_pasta/nome_arquivo

#### //Desfazer Alterações Ainda Não Salvas no Git
  * git checkout --nome_arquivo

#### //Desfazer Alterações Adicionadas ao Git sem as Apagar
  * git reset --nome_arquivo

#### //Desfazer Alterações Adicionadas ao Git e Apaga-las
  * git reset --hard

#### //Desfazer Alterações Commitadas Voltando ao Commit Anterior
  * git revert --no-edit código_do_commit_a_voltar

# Repositórios Externos

## Repositório Remoto
É responsável por hospedar o versionamento, sendo o ponto de acesso dos usuários locais. Geralmente é usado como repositório central, não sendo acessado diretamente, mas funcionando como backup e repositório de integração do que está sendo trabalhado pelos usuários nos repositórios locais.

#### //Criar Repositório Remoto
  * git init --bare nome_repositório.git

#### //Adicionar Repositório Remoto
  * git remote add nome_repositório endereço_repositório

#### //Listar Repositórios Remotos
  * git remote

#### //Listar Repositórios Remotos e Seus Endereços
  * git remote -v

#### //Renomear Repositório Remoto
  * git remote rename nome_repositório novo_nome

#### //Alterar o Endereço do Repositório Remoto
  * git remote set-url nome_repositório novo_endereço

#### //Enviar commits para o Repositório Remoto
  * git push nome_repositório nome_branch

#### //Clonar Repositório Remoto
  * git clone endereço_repositório

#### //Sincronizar Repositório Local com Repositório Remoto
  * git pull nome_repositório nome_branch

## GitHub
É uma aplicação web para hospedagem e compartilhamento de código que utiliza o git como sistema de controle de versão. Funciona também como uma rede social colaborativa entre programadores em projetos open-source.

#### //Copiar Repositório de Outro Usuário para o Nosso Usuário
  * Botão Fork (feito no github)

#### //Integrar alterações realizadas na cópia com o repositório principal
  * Botão Pull Request (feito no github)

