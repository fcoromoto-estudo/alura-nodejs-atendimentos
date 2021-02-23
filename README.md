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

### Urls
| Descrição | Verbo Http | URL |
| ------ | ------ | ------ |
| Listar | GET |[http://localhost:3000/atendimentos/](http://localhost:3000/atendimentos/) |
| Buscar por ID | GET  |[http://localhost:3000/atendimentos/{id}](http://localhost:3000/atendimentos/{id}) |
| Deletar | DELETE |[http://localhost:3000/atendimentos/{id}](http://localhost:3000/atendimentos/{id}) |
| Criar | POST |[http://localhost:3000/atendimentos/](http://localhost:3000/atendimentos/) |
| Alterar | PUT |[http://localhost:3000/atendimentos/](http://localhost:3000/atendimentos/) |


### Json Payload
```json
{
  "cliente": "string",
  "pet": "string",
  "servico": "string",
  "observacoes": "string",
  "status": "string",
  "data": "string" formato dd/MM/yyyy
}
 
```


## Como subir

**Obs 1:** É importante que tenha rodado pelo menos 1 vez o ```npm install```.  
**Obs 2:** Executar os comandos abaixo dentro da pasta raiz.

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
