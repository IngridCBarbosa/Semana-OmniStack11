const express = require('express')


const OngController = require('./controllers/OngsController')
const IncidentsController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// ------ ONGS ---------
//LOGIN
routes.post('/session', SessionController.create)
// LISTAR 
routes.get('/ongs', OngController.index)
// CRIAR
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

// ------ INCIDENTES ---------
// CRIA  
routes.post('/incidents', IncidentsController.create)
// LISTAR 
routes.get('/incidents', IncidentsController.index)
// DELETAR 
routes.delete('/incidents/:id', IncidentsController.delete)



module.exports = routes