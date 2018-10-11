
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'Starters', menu_id: 1},
        {category_name: 'Pastas', menu_id: 1},
        {category_name: 'Pizzas', menu_id: 1},
        {category_name: 'Beer', menu_id: 2},
      ]); 
    });
};
