
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        { menu_name: 'Dinner', account_id: 1 },
        { menu_name: 'Drinks', account_id: 1 }
      ]);
    });
};
