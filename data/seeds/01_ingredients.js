
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, ingredient: '2 eggs', steps: "crack egg"},
        {recipe_id: 2, ingredient: '2 eggs', steps: "crack egg"},
        {recipe_id: 3, ingredient: '2 eggs', steps: "crack egg"}
      ]);
    });
};
