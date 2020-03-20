
exports.up = function(knex) {
  return knex.schema.createTable("recipes", function(recipes) {
      recipes.increments()

      recipes.string("recipe_name", 200).notNullable()
      recipes.text("description").notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes")
};
