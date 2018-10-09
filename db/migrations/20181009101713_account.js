exports.up = function(knex, Promise) {
  return knex.schema.createTable("account", table => {
      table.increments();
      table.string("account_name");
      table.string("email").unique();
      table.string("password").notNullable();
      table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("account");
};
