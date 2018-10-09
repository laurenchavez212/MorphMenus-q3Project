exports.up = function (knex, Promise) {
    return knex.schema.createTable("menus", table => {
        table.increments();
        table.string("menu_name");
        table.integer("account_id");
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("menus");
};
