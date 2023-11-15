git push -u origin main
ERROR: Repository not found.
fatal: Could not read from remote repository.

para corrigir, deve haver registrado o nome do 
repositório no git de maneira errada. 
para corrigir, utilize o comando. 

git remote set-url origin git@github.com:nosferatuzod86/teste_vetores.git

após corrigir o diretório do githube, pode enviar as alterações commitadas normalmente. 

git push -u origin main

