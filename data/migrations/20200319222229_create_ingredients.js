
exports.up = function(knex) {
  return knex.schema.createTable("ingredients", function(ingredients) {

      ingredients.increments();

      ingredients
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

      ingredients.string("ingredients", 200)
      ingredients.text("steps", 300)
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients")
};
