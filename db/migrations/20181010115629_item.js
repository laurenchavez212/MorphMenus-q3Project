exports.up = function(knex, Promise) {
  return knex.schema.createTable("item", table => {
    table.increments();
    table.string("item_name");
    table.integer("category_id");
    table.string("item_price");
    table.text("item_description");
    table.string("options");
    table.string("allergies");
    table.string("image_file");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("item");
};
