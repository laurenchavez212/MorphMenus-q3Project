
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex("item").insert([
        {
          item_name: "KICK BUTT GARLIC BREAD",
          category_id: 1,
          item_price: "4.39",
          item_description:
            "A family favorite, our garlic bread is a BIG tear-off loaf. It’s one of Mrs. Gibbilini’s kick fanny recipes.",
          options: "with cheese (+.60) side of homemade marinara (+.89)",
          allergies: "Gluten, Dairy, Eggs, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/039/normal/Oreganos2017-69-GarlicCheeseBreads.jpg?1526198320"
        },
        {
          item_name: "BOOM DIP",
          category_id: 2,
          item_price: "9.29",
          item_description:
            "Named after our swingin’ Kaboom Room, it’s a delicious concoction of spinach, artichokes and cheese served with our Italian chips for dipping. Kaboom!",
          options: "",
          allergies: "Dairy, Gluten, Eggs, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/040/normal/Oreganos2017-120-BoomDip.jpg?1526198389"
        },
        {
          item_name: "HUGE GUACA-TONY",
          category_id: 1,
          item_price: "9.89",
          item_description:
            "A very tasty Italian guacamole made with basil, garlic, fresh avocado, red onions, and a little tomato all surrounded with our pizza crust chips. It’s Grrreat!! Sorry, that’s a different Tony. Handmade to order!",
          options: "Gutlen Free pizza crust(+$1.00)",
          allergies: "Gluten, Dairy, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/041/normal/Guac.jpg?1539108249"
        },
        {
          item_name: "BIG BRUSCHETTA AUTHENTICO",
          category_id: 1,
          item_price: "7.89",
          item_description:
            "We grill our tasty Italian bread and cover it with fresh tomatoes, basil, red onions, garlic, olive oil, oregano and a sprinkling of fresh Parmesan cheese. It’s real and big. Real Big!",
          options: "",
          allergies: "Gluten, Dairy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/042/normal/Oreganos_September_28__2015_150.jpg?1526198492"
        },
        {
          item_name: "ITALIAN FRIED ZUCCHINI",
          category_id: 1,
          item_price: "6.99",
          item_description:
            "These skinny zucchinis are lightly battered and fried to a golden perfection. Whoever thought being naughty would feel so good?! Served with a side of ranch for your dipping pleasure. Get some!",
          options: "",
          allergies: "Gluten, Dairy, Eggs, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/043/normal/Zucchini_Frys_different_angle_highres.jpg?1526198557"
        },
        {
          item_name: "PESTO BRUSCHETTA",
          category_id: 1,
          item_price: "8.99",
          item_description:
            "If you like our bruschetta then you gotta try this! We top baked Italian bread with four Italian cheeses, basil pesto, minced onion and sliced tomatoes and serve with our house marinara sauce. Let’s go pesto!",
          options: "",
          allergies: "Gluten, Dairy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/045/normal/PBruschetta.jpg?1526198684"
        },
        {
          item_name: "PABLO PICASSO MEXICO SALAD",
          category_id: 2,
          item_price: "6",
          item_description:
            "Fajita chicken, fresh Romaine blend, cotija, cheddar and a four cheese blend, all mixed with fresh cilantro, tomatoes and onion and tossed in a slightly spicy chipotle ranch dressing and mixed with tri-colored corn strips.",
          options: "Veg Heads, try pinto beans instead of chicken!",
          allergies:
            "Dairy, Eggs, Soy - TORTILLA STRIPS MAY CONTAIN GLUTEN",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/051/normal/Pablo.jpg?1539111909"
        },
        {
          item_name: "THE ANTIPASTO THING",
          category_id: 2,
          item_price: "11.89",
          item_description:
            "You got something against pasta?! Then try this salad that’s loaded with all your favorite Italian meats, fresh Romaine blend, artichoke hearts, tomatoes, red peppers, red onions, pepperoncinis, Italian cheeses, our cheese-tons and tossed with Italian dressing. Mamma Mia!",
          options: "",
          allergies: "Gluten, Dairy, Eggs, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/052/normal/Oreganos2017-AntipastoThing-14.jpg?1526199686"
        },
        {
          item_name: "THE BIG BEEFSTRO SALAD",
          category_id: 2,
          item_price: "11.39",
          item_description:
            "Belly up! We start with a LARGE amount of our tasty shaved ribeye, add jalapeños, cotija cheese, tomatoes, spinach, fresh Romaine blend, a little onion, dashes of cilantro, and topped with crispy sweet onions. It’s served with our sweet serrano pepper fat-free dressing. It’s kinda low fat, has a kick, and great for you high protein nuts! Moo.",
          options: "Remove crispy onions to make it Gluten Friendly!",
          allergies: "Dairy, Soy ",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/054/normal/Beefstro.jpg?1539108499"
        },
        {
          item_name: "VINO BAMBINO",
          category_id: 2,
          item_price: "9.29",
          item_description:
            "Batter up! Fresh Romaine blend tossed with Caesar dressing, a mix of tri-colored pasta & black olives, pinto beans, scallions, Parmesan cheese and fresh cilantro. We top it with our wine-marinated chicken, red bell peppers and sun dried tomatoes. This Babe comes out swingin’!",
          options: "Remove pasta salad to make it Gluten Friendly!",
          allergies: "Gluten, Dairy, Eggs, Fish",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/055/normal/Vino.jpg?1539112013"
        },
        {
          item_name: "OREGANO’S FAVORITE",
          category_id: 2,
          item_price: "8.69",
          item_description:
            "And soon to be yours! Fresh Romaine blend, roasted red peppers, our spiced feta cheese, combined with a medley of sundried tomatoes, Kalamata olives, pine nuts and raisins, tossed with our tasty honey vinaigrette dressing and topped with red onions. Are you drooling yet? Try it with chicken too!",
          options: "Add lots o'chicken (+$3.49)",
          allergies: "Dairy, Soy ",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/056/normal/Favorite.jpg?1539108622"
        },
        {
          item_name: "JULIUS CAESAR SALAD",
          category_id: 2,
          item_price: "6.99",
          item_description:
            "Julius would have marched all the way to Arizona for this rendition of his immortal salad: Fresh Romaine blend, our special dressing, homemade croutons and shaved and shredded Parmesan cheese.",
          options:
            "Add lots o'chicken (+$3.49) Remove croutons to make it Gluten Friendly!",
          allergies: "Gluten, Dairy, Eggs, Fish, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/057/normal/Oreganos2017-CasesarSalad-6.jpg?1526199967"
        },
        {
          item_name: "ALFREDO THE DARK",
          category_id: 3,
          item_price: "9.89",
          item_description:
            "First, we take the finest cream and teach it Spanish! Then our poblano peppers and a special blend of Southwest cheeses are sautéed with a spiral pasta. It’s topped with diced tomatoes, a tasty jalapeño and our “south of the border” bread. There’s nothing to be “Alfredo” of.",
          options:
            "Add Sausage, Meatballs, or Chicken (+$3.49) Sub Gluten Friendly Pasta (+$1)",
          allergies: "Gluten, Dairy, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/070/normal/Alfredo.jpg?1539117828"
        },
        {
          item_name: "UNCLE FRANK’S SAUSAGE PESTO",
          category_id: 3,
          item_price: "10.39",
          item_description:
            "We say pesto, you say delicious! We mix bow tie pasta with our special sausage, basil pesto, spinach, sundried tomatoes, pine nuts and finished with shaved Parmesan.",
          options: "",
          allergies: "Gluten, Dairy, Tree Nuts, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/071/normal/SausagePesto.jpg?1539117854"
        },
        {
          item_name: "BIG RIG PASTA",
          category_id: 3,
          item_price: "9.89",
          item_description:
            "A huge bowl of rigatoni pasta (BIG RIG, get it?) covered with a tasty tomato chipotle cream sauce, chopped basil, diced tomatoes, Parmesan and a spicy finish. You’ll want to form your own convoy!",
          options:
            "Add Sausage, Meatballs, or Chicken (+$3.49) Sub Gluten Friendly Pasta (+$1)",
          allergies: "Gluten, Dairy, Soy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/072/normal/BigRig.jpg?1539117878"
        },
        {
          item_name: "NUMERO ONE-O",
          category_id: 4,
          item_price: "26.79",
          item_description:
            "The name says it all. A traditional combo of housemade sausage, pepperoni, mushrooms, onions, green peppers and Wisconsin cheese makes one really tasty pizza. It’s a must-have.",
          options: "14 / 18",
          allergies: "Gluten, Dairy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/093/normal/Oneo.jpg?1539112778"
        },
        {
          item_name: "THE YAHOO BARBECUE CHICKEN PIZZA",
          category_id: 4,
          item_price: "24.79",
          item_description:
            "Who doesn’t like a good barbecue? We pile on our tasty chicken (what else?), cotija, cheddar and Wisconsin cheeses, red onions, scallions, diced tomatoes, and Oregano’s own BBQ sauce. This pizza will leave a mark on you. Get branded!",
          options: "14 / 18",
          allergies: "Gluten, Dairy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/089/normal/Oreganos2017-BBQChickenPizza-7.jpg?1526201313"
        },
        {
          item_name: "CLARK STREET MEAT PIZZA",
          category_id: 4,
          item_price: "26.99",
          item_description:
            "It’s the spicy meat pizza that keeps on giving. It’s loaded with our Chicago sausage, capicolla, salami, garlic, mozzarella, oregano, chili flakes, Wisconsin, Parmesan and Parmano cheeses, then finished with fresh basil.",
          options: "14 / 18",
          allergies: "Gluten, Dairy",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/100/normal/Oreganos2017-ClarkStPizza-2.jpg?1526202641"
        },
        {
          item_name: "THE ORIGINAL PIZZA COOKIE®",
          category_id: 5,
          item_price: "4.99",
          item_description:
            "Cookie dough, slightly baked in a 6-inch pizza pan and topped with three scoops of vanilla bean ice cream. This baby serves 2-4.",
          options:
            "Chocolate Chip, Peanut Butter Chocolate or White Chocolate Macadamia Nut",
          allergies: "Gluten, Dairy, Eggs, Soy, Tree Nut ",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/108/normal/Cookie.jpg?1539120389"
        },
        {
          item_name: "GRANDMA G’S CLASSiC CHEESECAKE",
          category_id: 5,
          item_price: "4.99",
          item_description:
            "We serve a hunk of our creamy, delicious, old-fashioned cheesecake with a generous dusting of real graham crackers. It’s like New York cheesecake, but a lot less expensive!",
          options: "",
          allergies: "Gluten, Dairy, Eggs ",
          image_file:
            "http://morphmenus.s3.amazonaws.com/items/images/000/000/109/normal/IMG_0073.jpg?1526203636"
        }
      ]);
    });
};
