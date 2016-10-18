/*eslint-disable*/

var knex = require('../db/knex');

module.exports = {
    addNote: function(body) {
        return knex('notes').insert(body).returning('*');
    },
    getAllNotes: function() {
        return knex('notes').select();
    },
    getOneNote: function(id) {
        return knex('notes').where({id: id});
    },
    searchingNotes: function(query) {
      return knex('notes').select().where('body', 'like', '%'+query+'%');
    }
};
