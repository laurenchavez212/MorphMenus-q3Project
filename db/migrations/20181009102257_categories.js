exports.up = function(knex, Promise) {
  return knex.schema.createTable("categories", table => {
    table.increments();
    table.string("category_name");
    table.integer("menu_id");
    table.integer("account_id");
    table.string("order");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("categories");
};
