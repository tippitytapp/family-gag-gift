exports.up = function (knex) {
    return knex.schema
        .createTable("people", (person) => {
        person.increments();
        person.string("name").notNullable();
        person.string("goesBy")
        person.integer("age", 2);
        person.string("phone");
        person.string("address1").notNullable();
        person.string("city").notNullable();
        person.string("state").notNullable();
        person.integer("zip_code", 5)
        person.boolean("chosen").defaultTo("false")
        person.string("chosen_by")
        })
    };
    
    exports.down = function (knex) {
    return knex.schema.dropTableIfExists("people");
    }
