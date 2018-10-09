exports.up = function (knex, Promise) {
    return knex.schema.createTable("items", table => {
        table.increments();
        table.integer("category_id");
        table.integer("order");
        table.string("item_name");
        table.integer("item_price");
        table.string("item_description ");
        table.string("options");
        table.string("allergies");
        table.string("image_file_name");
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("items");
};
