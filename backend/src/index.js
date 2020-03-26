const express = require('express')
const routes = require('./routes.js')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
app.use(routes)

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


/* 
    TIPOS DE PARÂMETROS:

    Query Params: Parâmetros nomeados enviados na rota após de "?" (Filtros , paginação) => req.query
    Route Params: Parâmetros utilizados para identidicar recursos => req.params
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos => req.body

*/


/**
 *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 *  NoSQL: MongDB, CouchDB, etc
 */

 /**
  * DRIVER: SELECT * FROM USERS
  * QUERY BUILDER: table('users').select('*').where()
  */



app.listen(3333)
