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

### Ignorar arquivos
  Cria-se um arquivo com o nome .gitignore no diretório principal do projeto, com os nomes dos arquivos e pastas a serem ignorados pelo controle de versão do git. Esse arquivo deve ser salvo no git.
  * .gitignore

### Histórico de arquivos commitados

> #### Exibir histórico de todos os commits do repositório
```
git log
```
> #### Exibir histórico de um arquivo específico
```
git log nome_arquivo 
```  
> #### Exibir histórico dos últimos arquivos do repositório
```
git log -n numero_de_commits_a_mostrar
```
> #### Exibir resumo do histórico de commits do repositório
```
git log --oneline 
```
> #### Exibir resumo das alterações de commits 
```
git log --stat
```
> #### Exibir commit pai
```
git log --parents
```
> #### Exibir commit que a branch master está apontando
```
git log --decorate
```
> #### Exibir alterações detalhadas de todos os arquivos
```
git show 
```
> #### Exibir alterações detalhadas de um commit
```
git show nome_commit 
```

### Alterações nos arquivos
Podemos verificar alterações feitas em arquivos que estamos trabalhando e as comparar com versões que já estão salvas.

> #### Exibir mudanças não salvas no git em todos os arquivos
```
git diff 
```
> #### Exibir mudanças não salvas no git em um arquivo específico
```
git diff nome_arquivo 
```
> #### Exibir mudanças não commitadas 
```
git diff --staged
```
> #### Comparar dois commits de um arquivo
```
git diff numero_commit_1 : numero_commit_2
```
> #### Apagar arquivo
```
git rm nome_arquivo
```
> #### Renomear arquivo
```
git rm nome_arquivo novo_nome_arquivo
```
> #### Mover arquivo
```
git mv nome_arquivo nome_pasta/nome_arquivo
```
> #### Desfazer alterações ainda não salvas no git
```
git checkout --nome_arquivo
```
> #### Desfazer alterações adicionadas ao git sem as apagar
```
git reset --nome_arquivo
```
> #### Desfazer alterações adicionadas ao git e apaga-las
```
git reset --hard
```
> #### Desfazer alterações commitadas voltando ao commit anterior
```
git revert --no-edit código_do_commit_a_voltar
```

### Repositório remoto
É responsável por hospedar o versionamento, sendo o ponto de acesso dos usuários locais. Geralmente é usado como repositório central, não sendo acessado diretamente, mas funcionando como backup e repositório de integração do que está sendo trabalhado pelos usuários nos repositórios locais.

> #### Criar repositório remoto
```
git init --bare nome_repositório.git
```
> #### Adicionar repositório remoto
```
git remote add nome_repositório endereço_repositório
```
> #### Listar repositórios remotos
```
git remote
```
> #### Listar repositórios remotos e seus endereços
```
git remote -v
```
> #### Renomear repositório remoto
```
git remote rename nome_repositório novo_nome
```
> #### Alterar o endereço do repositório remoto
```
git remote set-url nome_repositório novo_endereço
```
> #### Enviar commits para o repositório remoto
```
git push nome_repositório nome_branch
```
> #### Clonar repositório remoto
```
git clone endereço_repositório
```
> #### Sincronizar repositório local com repositório remoto
```
git pull nome_repositório nome_branch
```

### GitHub
É uma aplicação web para hospedagem e compartilhamento de código que utiliza o git como sistema de controle de versão. Funciona também como uma rede social colaborativa entre programadores em projetos open-source.

> #### Copiar repositório de outro usuário para o nosso usuário
* Botão Fork (feito no github)

> #### Integrar alterações realizadas na cópia com o repositório principal
* Botão Pull Request (feito no github)

## BRANCHES

### Branch
É uma linha de desenvolvimento independente em que o código é desenvolvido e commitado sem afetar outras branches.

### Branch main
É a ramificação principal definida por padrão pelo git. Caso não existam outras branches todo o código estará na branch main.

> #### Criar branch
```
git branch nome_branch
```
> #### Criar branch e mudar para ela
```
git checkout -b nome_branch
```
> #### Exibir branches existentes
```
git branch
```
> #### Exibir branches com o último commit associado a ela
```
git branch -v
```
> #### Trocar de branch
```
git checkout nome_branch
```
> #### Apagar branch
```
git branch -d nome_branch
```
> #### Apagar branch que tenha commits não mesclados com a branch main
```
git branch -D nome_branch
```
> #### Exibir branches mescladas
```
git branch --merged
```
> #### Exibir branches ainda não mescladas
```
git branch -no-merged
```
> #### Mesclar uma branch com a main criando um novo commit de merge
```
git merge nome_branch_a_mesclar -m "mensagem"
```
> #### Mesclar uma branch com a main simplificando o histórico com o Rebase
```
git rebase nome_branch_a_mesclar
```
> #### Cancelar mesclagem com o rebase
```
git rebase --abort
```

### Branches Remotas

> #### Exibir branches remotas
```
git branch -r
```
> #### Exibir branches remotas e locais
```
git branch -a
```
> #### Exibir último commit associado as branches remotas
```
git branch -r -v
```
> #### Exibir branches remotas e locais com o último commit associado a elas
```
git branch -a -v
```
> #### Enviar commits de uma branch local para o repositório remoto
```
git push nome_repositório_remoto nome_branch_local
```
> #### Criar branch local a partir de branch remota as associando
```
git checkout -b nome_branch nome_repositório_remoto/nome_branch_remota
```
> #### Criar branch local a partir de branch remota as associando (Opção 2)
```
git checkout -t nome_repositório_remoto/nome_branch_remota
```
> #### Obter commits de um repositório remoto ainda não presentes no repositório local
```
git fetch nome_repositório_remoto
```
> #### Mesclar branches remotas e locais com o commit de merge
```
git merge nome_repositório/nome_branch -m "mensagem"
```
> #### Mesclar branches remotas e locais com o rebase
```
git rebase nome_repositório/nome_branch
```
> #### Obter commits do repositório remoto e mesclar ao mesmo tempo
```
git pull
```
> #### Obter commits do repositório remoto e mesclar ao mesmo tempo simplificando o histórico
```
git pull --rebase
```
> #### Apagar branch remota
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