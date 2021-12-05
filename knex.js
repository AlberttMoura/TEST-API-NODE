const knex = require('knex')

const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: './people.db'
    },
    useNullAsDefault: true
})

module.exports = connectedKnex