
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments()


            tbl
                .varchar("name", 128)
                .notNullable()


            tbl
                .text("description")
                .notNullable()
            tbl
                .integer("value")
                .notNullable()

            tbl
                .varchar("img_url")

            tbl
                .integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

        })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("projects");
};
