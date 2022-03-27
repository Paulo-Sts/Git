<div style="display:inline_block">
    <img align="left" height="110" width="200" alt="MySql" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
</div>

# Git
Conceitos e comandos git para controle de versão.

<br>
<br>

## INTRODUÇÃO

> #### Instalação do git
1. Acessar o site do Git e escolher a versão mais atualizada disponível: https://git-scm.com/ 
2. Após baixar, executar o instalador seguindo as opções padrão.

### Sistema de controle de versão
É uma ferramenta que registra e guarda as diversas versões de arquivos. Funciona armazenando em um repositório todas as versões do arquivo já existentes, dessa forma é possível
acompanhar as alterações de versões mais antigas, mesclar e detectar alterações em um mesmo arquivo e identificar conflitos.  
Para gerenciar as versões de um ou mais arquivos, deve-se informar que o arquivo deve ser rastreado no repositório de controle de versão, assim como ao se realizar uma mudança
deve-se armazenar essas alterações no repositório de controle de versão.

#### Controle de versão local
É um sistema que gerencia versões através de um repositório local, armazenado em um único computador.

#### Controle de versão centralizado
É um sistema que gerencia versões através de um servidor central, esse servidor administra o acesso, mudanças e versões dos arquivos.

#### Controle de versão distribuído
É um sistema em que cada usuário trabalha com uma cópia dos arquivos localmente, também gerencia as versões de modo independente. Ao mesmo tempo todos os usuários estão integrados ao repositório central externo que interage com as cópias de repositório de cada usuário.

### Git
É um sistema de controle de versão distribuído, que gerencia as versões através do fluxo de estados dos arquivos. O Git salva uma imagem dos arquivos com suas mudanças em cada versão.

### Estados do arquivo

> #### Estado modificado
É o estado inicial do arquivo, quando ele é criado ou modificado se encontrando na área de trabalho. Nesse estado o arquivo ainda não está salvo no git.

> #### Estado preparado
Quando um arquivo está pronto para ser salvo. Nesse estado ele é adicionado ao Git.

> #### Estado consolidado
Quando o arquivo é salvo como uma versão. Nesse estado o Git salva uma imagem do arquivo no repositório de gerenciamento de versão local.

## COMANDOS

### Ajuda e configurações

> #### Versão do git
```
git --version
```
> #### Ajuda do git
```
git help
```
> #### Configurar nome do usuário
```
git config --global user.name "nome"
```
> #### Configurar email do usuário
```
git config --global user.email "email"
```
> #### Configurar editor de texto do usuário
```
git config --global core.editor "editor"
```
> #### Definir configurações do usuário de forma local
```
git config --local configuração_desejada
```
> #### Acessar configurações do usuário
```
git config --global configuração_desejada
```

### Inicializar controle de versão do git no repositório

> #### Inicializar o git em um repositório
```
git init
```  
> #### Criar repositório inicializando o git 
```
git init nome_repositório
```

### Salvar arquivos no git

> #### Acessar estado do arquivo
```
git status
```    
> #### Adicionar um arquivo para ser rastreado pelo git
```
git add nome_arquivo
```
> #### Adicionar todos os arquivos para serem rastreados pelo git
```
git add . 
```    
> #### Criar versão dos arquivos no git
```
git commit -m "mensagem" 
```  
> #### Adicionar e salvar arquivos no git
```
git commit -a -m "mensagem" 
```

## Ignorar Arquivos
  Cria-se um arquivo com o nome .gitignore no diretório principal do projeto, com os nomes dos arquivos e pastas a serem ignorados pelo controle de versão do git. Esse arquivo deve ser salvo no git.
  * .gitignore

# Manipulação de Arquivos

## Histórico de Arquivos Commitados

#### Exibir Histórico de Todos os Commits do Repositório
```
git log
```

#### Exibir Histórico de um Arquivo Específico
```
git log nome_arquivo 
```  

#### Exibir Histórico dos últimos Arquivos do Repositório
```
git log -n numero_de_commits_a_mostrar
```

#### Exibir Resumo do Histórico de Commits do Repositório
```
git log --oneline 
```

#### Exibir Resumo das Alterações de Commits 
```
git log --stat
```

#### Exibir Commit Pai
```
git log --parents
```

#### Exibir Commit que a Branch Master está Apontando
```
git log --decorate
```

#### Exibir Alterações Detalhadas de Todos os Arquivos
```
git show 
```

#### Exibir Alterações Detalhadas em um Arquivo
```
git show nome_commit 
```

## Alterações nos Arquivos
Podemos verificar alterações feitas em arquivos que estamos trabalhando e as comparar com versões que já estão salvas.

#### Exibir Mudanças não Salvas no Git em Todos os Arquivos
```
git diff 
```

#### Exibir Mudanças não Salvas no Git em um Arquivo Específico
```
git diff nome_arquivo 
```

#### Exibir Mudanças não Commitadas 
```
git diff --staged
```

#### Comparar dois Commits de um Arquivo
```
git diff numero_commit_1 : numero_commit_2
```

#### Apagar Arquivo
```
git rm nome_arquivo
```

#### Renomear Arquivo
```
git rm nome_arquivo novo_nome_arquivo
```

#### Mover Arquivo
```
git mv nome_arquivo nome_pasta/nome_arquivo
```

#### Desfazer Alterações ainda não Salvas no Git
```
git checkout --nome_arquivo
```

#### Desfazer Alterações Adicionadas ao Git sem as Apagar
```
git reset --nome_arquivo
```

#### Desfazer Alterações Adicionadas ao Git e Apaga-las
```
git reset --hard
```

#### Desfazer Alterações Commitadas voltando ao Commit Anterior
```
git revert --no-edit código_do_commit_a_voltar
```

# Repositórios Externos

## Repositório Remoto
É responsável por hospedar o versionamento, sendo o ponto de acesso dos usuários locais. Geralmente é usado como repositório central, não sendo acessado diretamente, mas funcionando como backup e repositório de integração do que está sendo trabalhado pelos usuários nos repositórios locais.

#### Criar Repositório Remoto
```
git init --bare nome_repositório.git
```

#### Adicionar Repositório Remoto
```
git remote add nome_repositório endereço_repositório
```

#### Listar Repositórios Remotos
```
git remote
```

#### Listar Repositórios Remotos e seus Endereços
```
git remote -v
```

#### Renomear Repositório Remoto
```
git remote rename nome_repositório novo_nome
```

#### Alterar o Endereço do Repositório Remoto
```
git remote set-url nome_repositório novo_endereço
```

#### Enviar Commits para o Repositório Remoto
```
git push nome_repositório nome_branch
```

#### Clonar Repositório Remoto
```
git clone endereço_repositório
```

#### Sincronizar Repositório Local com Repositório Remoto
```
git pull nome_repositório nome_branch
```

## GitHub
É uma aplicação web para hospedagem e compartilhamento de código que utiliza o git como sistema de controle de versão. Funciona também como uma rede social colaborativa entre programadores em projetos open-source.

#### Copiar Repositório de outro Usuário para o nosso Usuário
* Botão Fork (feito no github)

#### Integrar Alterações Realizadas na Cópia com o Repositório Principal
* Botão Pull Request (feito no github)

# Branches

## Branch
É uma linha de desenvolvimento independente em que o código é desenvolvido e commitado sem afetar outras branches.

## Branch Main
É a ramificação principal definida por padrão pelo git. Caso não existam outras branches todo o código estará na branch main.

#### Criar Branch
```
git branch nome_branch
```

#### Criar Branch e Mudar para ela
```
git checkout -b nome_branch
```

#### Exibir Branches Existentes
```
git branch
```

#### Exibir Branches com o último Commit Associado a ela
```
git branch -v
```

#### Trocar de Branch
```
git checkout nome_branch
```

#### Apagar Branch
```
git branch -d nome_branch
```

#### Apagar Branch que tenha Commits não Mesclados com a Master
```
git branch -D nome_branch
```

#### Exibir Branches Mescladas
```
git branch --merged
```

#### Exibir Branches ainda não Mescladas
```
git branch -no-merged
```

#### Mesclar uma Branch com a Main Criando um novo Commit de Merge
```
git merge nome_branch_a_mesclar -m "mensagem"
```

#### Mesclar uma Branch com a Main Simplificando o Histórico com o Rebase
```
git rebase nome_branch_a_mesclar
```

#### Cancelar Mesclagem com o Rebase
```
git rebase --abort
```

## Branches Remotas

#### Exibir Branches Remotas
```
git branch -r
```

#### Exibir Branches Remotas e Locais
```
git branch -a
```

#### Exibir último Commit Associado as Branches Remotas
```
git branch -r -v
```

#### Exibir Branches Remotas e Locais com o último Commit Associado a elas
```
git branch -a -v
```

#### Enviar Commits de uma Branch Local para o Repositório Remoto
```
git push nome_repositório_remoto nome_branch_local
```

#### Criar Branch Local a partir de Branch Remota as Associando
```
git checkout -b nome_branch nome_repositório_remoto/nome_branch_remota
```

#### Criar Branch Local a partir de Branch Remota as Associando (Opção 2)
```
git checkout -t nome_repositório_remoto/nome_branch_remota
```

#### Obter Commits de um Repositório Remoto ainda não Presentes no Repositório Local
```
git fetch nome_repositório_remoto
```

#### Mesclar Branches Remotas e Locais com o Commit de Merge
```
git merge nome_repositório/nome_branch -m "mensagem"
```

#### Mesclar Branches Remotas e Locais com o Rebase
```
git rebase nome_repositório/nome_branch
```

#### Obter Commits do Repositório Remoto e Mesclar ao Mesmo Tempo
```
git pull
```

#### Obter Commits do Repositório Remoto e Mesclar ao Mesmo Tempo Simplificando o Histórico
```
git pull --rebase
```

#### Apagar Branch Remota
```
git push nome_repositório	:nome_branch_remota
```

## Tags
As tags são apontadores fixos de commits e trabalham "tirando uma foto" do código atual do repositório para dessa forma indicar e identificar uma versão. Elas possuem um nome
que define qual versão a tag está apontando.

#### Criar Tag
```
git tag nome_tag
```

#### Exibir Tags
```
git tag 
```

#### Criar Tag de um Commit Anterior
```
git tag nome_tag número_commit
```

#### Apagar Tag 
```
git tag -d nome_tag 
```

#### Criar Tag Anotada
```
git tag -a nome_tag -m "mensagem" 
```

#### Exibir Tags Anotadas
```
git show -s nome_tag 
```

#### Enviar Tag Para Repositório Remoto
```
git push nome_repositorio nome_tag 
```

#### Enviar Todas as Tags Para Repositório Remoto
```
git push nome_repositorio --tags 
```