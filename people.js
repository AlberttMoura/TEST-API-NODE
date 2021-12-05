const knex = require('./knex')

function createPerson(person) {
    return knex('people').insert(person)
}

function getAllPeople(person) {
    return knex('people').select('*')
}

function getPersonById(id) {
    return knex('people').where({id: id}).select()
}

function deletePerson(id) {
    return knex('people').where({id, id}).del()
}

function updatePerson(id, person) {
    return knex('people').where({id, id}).update(person)
}

module.exports = {
    createPerson,
    getAllPeople,
    deletePerson,
    updatePerson,
    getPersonById
}