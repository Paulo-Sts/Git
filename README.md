<div style="display:inline_block">
    <img align="left" height="110" width="200" alt="MySql" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
</div>

### Git
Conceitos e comandos git para controle de versão.

<br>

> ### Referências
* [Instalação](https://git-scm.com/) 
* [Pro Git](https://git-scm.com/book/en/v2)

<br>

## CONCEITOS

> ### Sistema de controle de versão
* É uma ferramenta que registra e guarda as diversas versões de arquivos. Funciona armazenando em um repositório todas as versões do arquivo já existentes, dessa forma é possível
acompanhar as alterações de versões mais antigas, mesclar e detectar alterações em um mesmo arquivo e identificar conflitos.  
* Para gerenciar as versões de um ou mais arquivos, deve-se informar que o arquivo deve ser rastreado no repositório de controle de versão, assim como ao se realizar uma mudança
deve-se armazenar essas alterações no repositório de controle de versão.

#### Controle de versão local
* É um sistema que gerencia versões através de um repositório local, armazenado em um único computador.

#### Controle de versão centralizado
* É um sistema que gerencia versões através de um servidor central, esse servidor administra o acesso, mudanças e versões dos arquivos.

#### Controle de versão distribuído
* É um sistema em que cada usuário trabalha com uma cópia dos arquivos localmente, também gerencia as versões de modo independente. Ao mesmo tempo todos os usuários estão integrados ao repositório central externo que interage com as cópias de repositório de cada usuário.

> ### Git
* É um sistema de controle de versão distribuído, que gerencia as versões através do fluxo de estados dos arquivos. O Git salva uma imagem dos arquivos com suas mudanças em cada versão.

> ### Estados do arquivo

#### Estado modificado
* É o estado inicial do arquivo, quando ele é criado ou modificado se encontrando na área de trabalho. Nesse estado o arquivo ainda não está salvo no git.

#### Estado preparado
* Quando um arquivo está pronto para ser salvo. Nesse estado ele é adicionado ao Git.

#### Estado consolidado
* Quando o arquivo é salvo como uma versão. Nesse estado o Git salva uma imagem do arquivo no repositório de gerenciamento de versão local.

<br>

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

> #### Exibir histórico de commits um arquivo específico
```
git log nome_arquivo 
```

> #### Exibir histórico de commits dos últimos arquivos do repositório
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

> #### Exibir commit que a branch main está apontando
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

## REPOSITÓRIOS EXTERNOS

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

## GITHUB
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

> #### Criar branch a partir de outra branch e mudar para ela
```
git checkout -b nome_branch nome_branch_origem
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

> #### Mesclar uma branch com a main simplificando o histórico com o rebase
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
git push nome_repositório :nome_branch_remota
```

## TAGS
As tags são apontadores fixos de commits e trabalham "tirando uma foto" do código atual do repositório para dessa forma indicar e identificar uma versão. Elas possuem um nome
que define qual versão a tag está apontando.

> #### Criar tag
```
git tag nome_tag
```

> #### Exibir tags
```
git tag 
```

> #### Criar tag de um commit anterior
```
git tag nome_tag número_commit
```

> #### Apagar tag 
```
git tag -d nome_tag 
```

> #### Criar tag anotada
```
git tag -a nome_tag -m "mensagem" 
```

> #### Exibir tags anotadas
```
git show -s nome_tag 
```

> #### Enviar tag para repositório remoto
```
git push nome_repositorio nome_tag 
```

> #### Enviar todas as tags para repositório remoto
```
git push nome_repositorio --tags 
```

## FORMAS DE TRABALHAR COM O GIT

### Um repositório central utilizando apenas a branch main
Todo o código fica armazenado na branch main local, onde são salvas as alterações e commits. Após as mudanças estarem prontas os commits são enviados para o repositório
remoto.   
É necessário sincronizar os repositórios locais de cada usuário para se obter as alterações.Esse fluxo de trabalho é indicado para pequenos projetos com uma equipe pequena.  

> Fluxo:
1. Clonar repositório;
2. Realizar alterações;
3. Adiciona-las ao git e commita-las;
4. Enviar commits para o repositório remoto;
5. Obter modificações dos outros desenvolvedores do repositório remoto;
6. Corrigir possíveis conflitos;
7. Ao realizar uma entrega definir uma tag e envia-la ao repositório remoto.

> Vantagens:
* Simplificação do fluxo para iniciantes;
* Facilidade para adotar uma integração contínua do desenvolvimento.

> Desvantagens:
* A correção de defeitos fica mais difícil de gerenciar pois o código já pode ter sido compartilhado para o repositório remoto;
* A entrega de funcionalidades fica restrita a entrega de todo o código, já que tudo fica armazenado na branch master, isso dificulta a entrega de apenas só parte de novas
funcionalidades;
* É necessário permissão de push para todos os usuários já que há apenas um repositório, é inviável para projetos open source e em projetos com grandes equipes.

### Um repositório central usando branches por funcionalidade
A branch main é utilizada para guardar o código pronto para uso, novas alterações e funcionalidades são feitas em branches separadas que ao serem finalizadas são mescladas
através do merge ou rebase a branch main criando assim uma nova versão por exemplo.  
Apenas alterações emergenciais devem ser feitas diretamente na branch main e após feitas deve-se sincronizar com a branch da funcionalidade para que esta ao mesclar com a main não gere conflitos. É recomendada para projetos maiores em que novas funcionalidades devem ser entregues rapidamente.

> Fluxo:
1. Clonar repositório;
2. Criar branch de funcionalidade e ir para ela a partir da main para realizar alterações;
3. Realizar alterações;
4. Adiciona-las ao git e commita-las;
5. Enviar a nova branch de funcionalidade com os commits para o repositório remoto;
6. Para os demais desenvolvedores poderem colaborar na nova branch de funcionalidade devem sincronizar seu repositório local com o remoto;
7. Criar um nova branch de funcionalidade local e sincronizar a nova branch local de funcionalidade com a branch remota de funcionalidade que havia sido criada;
8. Obter modificações dos outros desenvolvedores do repositório remoto;
9. Obter correções urgentes realizadas na main a sincronizando com o repositório remoto;
10. Corrigir possíveis conflitos;
11. Após finalizar uma função mesclar a branch de funcionalidade com a branch main;
12. Sincronizar também com a branch main do repositório remoto;
13. Ao realizar uma entrega definir uma tag e envia-la ao repositório remoto.

> Vantagens:
* O código mais estável fica isolado na branch main o que facilita possíveis correções emergenciais;
* Pode-se entregar apenas partes das funcionalidades, possibilitando mudanças mais tranquilas na estratégia de negócio do cliente.

> Desvantagens:
* É um fluxo de uso do git que exige um pouco mais de domínio do git por parte dos usuários;
* Ainda é necessário dar permissão de push para todos os membros da equipe devido a existência de um único repositório central, sendo novamente inviável em projetos
open source ou com grandes equipes;
* Pode ocorrer conflitos entre as novas funcionalidades e isso só é detectável quando todas as branches são mescladas com o merge;
* Dificulta a adoção de uma metodologia de integração contínua.

### Um repositório central com branches por etapa de desenvolvimento
A main é utilizada como repositório com código estável e é criada uma branch para o desenvolvimento de novas funcionalidades (pode ser chamada de desenv). A partir da branch
de desenvolvimento são criadas branches específicas para cada funcionalidade que ao serem finalizadas são mescladas com a branch de desenvolvimento e essa por sua vez ao ser validada é mesclada a main. Já para o caso de correções de erros urgentes, é criada uma branch de curto prazo a partir da main (pode ser chamada de hotflix) e então nela o erro é corrigido.  
Após isso a branch é mesclada com a main para inserir as correções e também com a branch de desenvolvimento para mante-la sincronizada com a branch main.     
Com a conclusão de funcionalidades e/ou correções as branches de curto prazo podem ser apagadas. Novas funcionalidades incluem uma nova versão e uma tag deve ser definida após a mesclagem com a branch main.  
É recomendado para projeto complexos que já possuam várias funcionalidades em desenvolvimento, pois esse fluxo torna o trabalho mais organizado em que a branch de desenvolvimento atua como integração entre as novas funcionalidades e como validador de possíveis erros ou bugs são identificados cedo.

> Fluxo:
1. Clonar repositório;
2. Criar branch desenv a partir da main;
3. Sincroniza-la com a branch desenv remota e aponta-la para ela;
4. Criar branches a partir de desenv para o desenvolvimento de novas funcionalidades;
5. Realizar alterações um uma branch de funcionalidade;
6. Adiciona-las ao git e commita-las;
7. Após concluída mesclar alterações com a branch desenv;
8. Validar o código na branch desenv;
9. Mesclar novas alterações com a main
10. Enviar alterações para o repositório remoto;
11. Obter modificações dos outros desenvolvedores do repositório remoto;
12. Corrigir possíveis conflitos;
13. Para resolver erros urgentes cria-se uma branch a partir da main chamada hotflix;
14. Após corrigir o erro mesclar a branch hotflix com a main e também a branch desenv para mante-las atualizadas;
15. Ao realizar uma entrega definir uma tag e envia-la ao repositório remoto.

> Vantagens:
* A branch main fica bem estável;
* Erros e conflitos são descobertos mais cedo ao se mesclar as branches de funcionalidade com a branch de desenvolvimento de maneira periódica;
* Por usar um fluxo de branches por funcionalidade, revisões nas versões se tornam mais fáceis de realizar;
* Correções urgentes tem um fluxo de solução definido com as branches de curto prazo (hotflix).
* Apenas partes das funcionalidades podem ser entregues ao se isolar na branch de desenvolvimento apenas as funções prontas para mesclagem.

> Desvantagens:
* É necessário que a equipe tenha um bom domínio do git;
* É um fluxo de gerenciamento complexo;
* Todos os membros da equipe precisam de permissão de push o que torna inviável para grandes equipes e projetos open-source;
* A integração contínua não ocorre pois novas funcionalidades só são entregues após serem mescladas com a branch de desenvolvimento e essa com a main.

### Colaborando em projetos open source com fork e pull request
É feita uma cópia pública do repositório original com o fork, baixa-la para o nosso repositório local e a partir da cópia deve ser criada uma branch onde se armazenará as alterações, podendo ser uma branch por funcionalidade ou uma branch de desenvolvimento.   
Ao finalizar mescla-se o repositório local com a cópia do repositório remoto e podemos solicitar ao mantenedor do repositório original um pull resquest da nossa cópia.  
Ele então revisará as modificações podendo sugerir melhorias, ele mesmo corrigir após o pull request na branch com as modificações e mesclar com o repositório original se considerar tudo certo. É indicado para projeto open-source de pequeno e médio porte.

> Fluxo:
1. Obter uma cópia do repositório original com o fork;
2. Clonar repositório;
3. Criar branch de funcionalidade ou desenvolvimento local e ir para ela para realizar alterações;
4. Realizar alterações;
5. Adiciona-las ao git e commita-las;
6. Enviar para o repositório remoto;
7. Solicitar pull request.

> Vantagens:
* Não é necessário dar permissão de push para todos os desenvolvedores;
* Útil para projeto open source de pequeno e médio porte.

> Desvantagens:
* A integração com o fork é muito tardia e erros só são identificados após o pull request;
* Tendo apenas um mantenedor o número de pull requests poderá se acumular.

### Organizando grandes projetos open source com um ditador e tenentes
Existe um mantenedor principal chamado ditador que tem a última palavra quando a incorporação de uma nova funcionalidade.  
Esse ditador define um conjunto de colaboradores
chamados tenentes que possuem uma cópia do repositório original com o fork focados no desenvolvimento de um módulo específico.    
A partir desses módulos colaboradores podem fazer contribuições obtendo uma cópia desse módulo, o baixando para o seu repositório local, definindo uma branch desenvolvimento ou por funcionalidade e trabalhando no projeto.       
Após finalizada e enviada a cópia do repositório remoto do então é executado um pull request para o módulo do tenente que então define se incorpora ao seu módulo as modificações ou não.  
Quando necessário então o tenente envia o conjunto de modificações do seu módulo ao repositório original do ditador com um novo pull request, esse por sua vez decide pela incorporação dessas modificações. É um modelo útil para grandes projetos open source com milhares de colaboradores.

> Fluxo:
1. Obter uma cópia do repositório do tenente com o módulo desejado com o fork;
2. Clonar repositório;
3. Criar branch de funcionalidade ou desenvolvimento local e ir para ela para realizar alterações;
4. Realizar alterações;
5. Adiciona-las ao git e commita-las;
6. Enviar para o repositório remoto;
7. Solicitar pull request ao tenente;
8. Após um conjunto de modificações o tenente solicita um pull request ao ditador.

> Vantagens:
* Não são necessárias permissões de push para os colaboradores;
* Funciona bem em grandes projetos colaborativos.

> Desvantagens:
* É um fluxo de trabalho extremamente complexo;
* A incorporação ocorre de maneira tardia.
