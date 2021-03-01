# Api Atendimentos 

A api de atendimentos foi crianda usando ```nodejs``` e ```expresjs``` seguindos os cursos da alura.

1. [Rest com NodeJS: API com Express e MySQL](https://cursos.alura.com.br/course/node-rest-api)
2. [NodeJS: Streaming de dados e Repositório](https://cursos.alura.com.br/course/nodejs-streaming-dados)

A api é um ```crud``` de atendimentos que ficara responsável por manter os dados e armazena-los em um banco ```mysql```.  
Todo o projeto esta dockerizado.

## Pré requisito 

* Nodejs 12.16.10
* Docker

## Apis

### Atendimentos

| Descrição | Verbo Http | URL |
| ------ | ------ | ------ |
| Listar | GET |[http://localhost:3000/atendimentos/](http://localhost:3000/atendimentos/) |
| Buscar por ID | GET  |[http://localhost:3000/atendimentos/{id}](http://localhost:3000/atendimentos/{id}) |
| Deletar | DELETE |[http://localhost:3000/atendimentos/{id}](http://localhost:3000/atendimentos/{id}) |
| Criar | POST |[http://localhost:3000/atendimentos/](http://localhost:3000/atendimentos/) |
| Alterar | PUT |[http://localhost:3000/atendimentos/](http://localhost:3000/atendimentos/) |

**Payload POST**
```json
{
  "cliente": "02392979111",
  "pet": "toby",
  "servico": "tosa",
  "observacoes": "bonzinho",
  "status": "agendado",
  "data": "04/02/2022"
}
```

**Obs:** ``cliente`` deve ser um número de cpf

### Pets

| Descrição | Verbo Http | URL |
| ------ | ------ | ------ |
| Criar | POST |[http://localhost:3000/atendimentos/](http://localhost:3000/pets/) |


**Json Payload POST**
```json
{
  "nome": "Harry",
  "imagem": "./assets/salsicha.js"
}
```

### Clientes

| Descrição | Verbo Http | URL |
| ------ | ------ | ------ |
| Buscar por CPF | GET  |[http://localhost:3000/atendimentos/{id}](http://localhost:8082/{cpf}) | 


## Instalar as depedências
Deve instalar as depedências dentro que esta na raiz ``/`` do projeto e também dentro da pasta ``servico/``.

```npm install```


## Como subir

**Obs 1:** É importante que tenha rodado pelo menos 1 vez o ```npm install```.
**Obs 2:** Executar os comandos abaixo dentro da pasta raiz.  
**Obs 3:** A porta ```9229``` está liberada para debug.

1. **Criar os containers (irá criar e iniciar)**:
```shell
./workspace.sh up 
```

2. **Parar os containers**:
```shell
./workspace.sh stop 
```

3. **Iniciar os containers (é preciso ja ter criado os containers)**:
```shell
./workspace.sh start 
```

4. **Remover os containers**:
```shell
./workspace.sh destroy 
```

5. **Recriar os containers (irá remover e depois cria-los)**:
```shell
./workspace.sh recreate 
```
