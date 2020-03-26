const connection = require('../database/connection')

module.exports = {

    async index(req,resp){
        const {page = 1} = req.query // esquema simple de paginação

        const [count] = await connection('incidentes').count()


        const incidents = await connection('incidentes')
            .join('ongs', 'ong_id', '=', 'incidentes.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidentes.*',
                'ongs.name',
                'ongs.email'
                ,'ongs.whatsapp'
                ,'ongs.city', 
                'ongs.uf'
            ])

        resp.header('X-Total-Coutn', count['count(*)'])
            
        return resp.json(incidents)
    },

    async create(req,resp){
        const {title, description, value} = req.body
        const ong_id = req.headers.authorization

        const [id] = await connection('incidentes').insert({
            title,
            description,
            value,
            ong_id,
        })
        return resp.json({ id })
    },

    async delete(req,resp){
        const {id} = req.params
        const ong_id = req.headers.authorization

        const incident = await connection('incidentes')
            .where('id',id)
            .select('ong_id')
            .first()

        if(incident.ong_id !== ong_id){
            return resp.status(401).json({ error: 'Operation not permited.'})
        }

        await connection('incidentes').where('id',id).delete();
        return resp.status(204).send()
    }
}