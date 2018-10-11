
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('account').del()
    .then(function () {
      // Inserts seed entries
      return knex('account').insert([
        { account_name: 'Oreganos Pizza Bistro', email: 'o@gmail.com', password: '123', logo: 'https://visitsedona.com/images/made/images/remote/http_res.cloudinary.com/simpleview/image/upload/c_fit,w_800,h_600/crm/sedona/Oreganos-Logo-Half-Red-Maroon---800x600-0ea8a3575056a36_0ea8a7d7-5056-a36f-23600d971c524db6_815_455auto_s_c1.jpg'},
      ]);
    });
};
