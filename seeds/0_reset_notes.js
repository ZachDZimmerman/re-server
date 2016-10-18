/*eslint-disable*/

exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE notes RESTART IDENTITY CASCADE")
};
