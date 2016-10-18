/*eslint-disable*/

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('notes').del().then(function() {
        return Promise.all([
            // Inserts seed entries
            knex('notes').insert({body: "Ask Larry about the TPS reports."}),
            knex('notes').insert({body: "Pick up milk!"})
        ]);
    });
};
