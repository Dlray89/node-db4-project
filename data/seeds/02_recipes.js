
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Chicken Parmesan', description: 'Chicken Parmesan is a dish that consists of breaded chicken breast covered in tomato sauce and mozzarella, parmesan, or provolone cheese. A slice of ham or bacon is sometimes added.'},
        {id: 2, recipe_name: 'Spicy Thai Basil Chicken', description: 'stir fry is one of the most popular and easiest to make. It’s flavorful, fast, and is going to become one of your favorite quick dinners.'},
        {id: 3, recipe_name: 'Moroccan Chicken Thighs', description: 'Combine chicken broth, paprika, cumin, ginger, turmeric, cinnamon, and 2 teaspoons lemon zest in a bowl. Heat oils in a cast iron skillet until they begin to smoke.'}
      ]);
    });
};
