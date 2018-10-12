
const knex = require("../db/knex.js");

module.exports = {

    adminPG: (req, res) => {
        knex('menu')
            .select('*', 'menu.id as menu_id')
            .innerJoin('account', 'menu.account_id', 'account.id')
            .where('account_id', req.params.id)
            .then((result) => {
                console.log("result",result)
                let { id, menu_name, ...user } = result[0]
                let newObj = {
                    user,
                    menus: result.map(menu => ({
                        id: menu.menu_id,
                        menu_name: menu.menu_name
                    }))
                }

                
            res.json(newObj)
        })
    },

    menu: (req, res) => {
        knex('item')
            .then((result) => {
            res.json(result)
        })
    },

    postItems: function (req, res) {
          knex('item').insert({
              item_name: req.body.item_name,
              category_id: req.body.category_id,
              item_price: req.body.item_price,
              item_description: req.body.item_description,
              options: req.body.options,
              allergies: req.body.allergies,
              image_file: req.body.image_file
        }).then((result) => {
            res.json(req.body)
        })
    },

    deleteItem: (req, res) => {
        console.log(req.params.id)
        knex('item').where('id', req.params.id).delete()
            .then((result) => {
                res.json(result)
            })
    },

    updateItem: (req, res) => {
        knex('item').where('id', req.params.id).update({
            item_name: req.body.item_name,
            category_id: req.body.category_id,
            item_price: req.body.item_price,
            item_description: req.body.item_description,
            options: req.body.options,
            allergies: req.body.allergies,
            image_file: req.body.image_file
        }, '*')
            .then((result) => {
                res.json(result)
            })
    },


}