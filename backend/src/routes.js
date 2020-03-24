const express = require('express')


const routes = express.Router()

routes.get('/users', (req,resp) =>{
    const params = req.query
    console.log(params)
    return resp.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Ingrid Barbosa'
    })
})

module.exports = routes