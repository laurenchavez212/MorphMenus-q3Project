
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex("item").insert([
        {
          item_name: "Boom Dip",
          menu_id: 1,
          category_id: 1,
          item_price: 8,
          item_description: "really yummy you should get this",
          options: "switch out the chips!",
          allergies: "dairy, gluten",
          image_file:
            "https://media-cdn.tripadvisor.com/media/photo-s/12/8c/bb/d4/boom-dip-appetizer.jpg"
        },
        {
          item_name: "Alfredo The Dark",
          menu_id: 1,
          category_id: 2,
          item_price: 14,
          item_description: "SO much food omg",
          options: "Add shrimp or chicken!",
          allergies: "dairy, gluten",
          image_file:
            "https://media-cdn.tripadvisor.com/media/photo-s/11/0f/4d/4a/alfredo-the-dark.jpg"
        },
        {
          item_name: "Pumpkin Porter",
          menu_id: 2,
          category_id: 1,
          item_price: 6,
          item_description: "Its time for fall ya'll",
          options: "",
          allergies: "gluten",
          image_file:
            "https://www.fourpeaks.com/wp-content/uploads/2017/01/FP_BeerLifestyle_SingleTank_Pumpkin.png"
        }
      ]);
    });
};
