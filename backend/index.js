const express = require('express')

const app = express()
/* 
 rota/recurso
*/

/*
    método HTTP

    GET : buscar uma informação  do back-end
    POST: CRIAR uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

app.get('/', (req,resp) =>{
    return resp.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Ingrid Barbosa'
    })
})

app.listen(3333)
