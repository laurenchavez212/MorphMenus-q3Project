exports.up = function(knex, Promise) {
  return knex.schema.createTable("menu", table => {
    table.increments();
    table.string("menu_name");
    table.integer("account_id").references("id").inTable("account")
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("menu");
};
