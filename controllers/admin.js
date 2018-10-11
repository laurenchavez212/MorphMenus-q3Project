const knex = require("../db/knex.js");

module.exports = {

    // adminPG: (req, res) => {
    //      knex('acount')
    //         .then((response) => {
    //             res.json(response)
    //         })
    // },

    // adminPG: (req, res) => {
    //    knex('menu')
    //        .then((menuRes)=>{
    //        knex('account')
    //            .then((accountRes)=>{
    //                res.json({ menuRes, accountRes})
    //        })
    //    })
    // },

    adminPG: (req, res) => {
        knex('menu')
            .innerJoin('account', 'menu.account_id', 'account.id')
            .where('account_id', req.params.id)
            .then((result) => {
                let { id, menu_name, ...user } = result[0]

                let newObj = {
                    user,
                    menus: result.map(menu => ({
                        id: menu.id,
                        menu_name: menu.menu_name
                    }))
                }

                
            res.json(newObj)
        })
    },

    // adminPG: (req, res) => {
    //     knex('account')
    //         .then((accountRes) => {
    //             res.json(accountRes[0])
    //     })
    // },




    all: (req, res) => {
        knex('menu')
            .then((menuRes) => {
                knex('account')
                    .then((accountRes) => {
                        knex('category')
                            .then((categoryRes) => {
                            knex('item')
                                .then((itemRes) => {
                                    res.json({ menuRes, accountRes, categoryRes, itemRes })
                                })
                        })
                    })
            })
    },

    // adminPG: (req, res) => {
    //     knex('menu')
    //         .then((menuRes) => {
    //             knex('account')
    //                 .then((accountRes) => {
    //                     res.json(menuRes, accountRes[0])
    //                 })
    //         })
    // },

    // appDets: (req, res) => {
    //     knex('booking').where('id', req.params.id)
    //         .then((bookingRes) => {
    //             knex('drNotes').where('booking_id', req.params.id)
    //                 .then((notesRes) => {
    //                     res.render('appointmentDets', {
    //                         booking: bookingRes[0],
    //                         drNotes: notesRes
    //                     });
    //                 })
    //         })
    // },

    // login: (req, res) => {
    //     console.log("HELLO!!")
    //     knex('admin').where("email", req.body.email)
    //         .then((result) => {
    //             console.log(result)
    //             let admin = result[0];
    //             if (admin.password === req.body.password) {
    //                 req.session.admin_id = admin.id;
    //                 req.session.save(() =>
    //                     res.redirect('/control'))
    //                 // res.send('ok')
    //             } else {
    //                 res.redirect("/");
    //                 // ADD~SHOW WRONG PASSWORD
    //             }
    //         })
    // },

    // logout: (req, res) => {
    //     // res.send('ok')
    //     req.session.admin_id = null;
    //     req.session.employee_id = null;
    //     req.session.save(() => {
    //         res.redirect("/")
    //     })
    // },

    // addProjectPG: (req, res) => {
    //     res.render('addProject')
    // },

    // addProject: (req, res) => {
    //     knex('project').insert({
    //         name: req.body.name,
    //         address: req.body.address,
    //         description: req.body.description,
    //         img_url: req.body.img_url,
    //     })
    //         .then(() => {
    //             res.redirect('/projects')
    //         })
    // },
    // delProject: (req, res) => {
    //     knex("project")
    //         .del()
    //         .where('id', req.params.id)
    //         .then(() => {
    //             res.redirect("/projects")
    //         })
    // },
    // control: (req, res) => {
    //     knex('employee')
    //         .then((result) => {
    //             // res.send(result)
    //             res.render('control', { result })
    //         })
    // },
    // // WAIT FOR DELETE
    // employeeInfo: (req, res) => {
    //     knex('employee').where('id', req.params.employee_id)
    //         .then((emeplyresult) => {
    //             return knex('clock').where('employee_id', req.params.employee_id)
    //                 .then((result) => {
    //                     if (result.length) {
    //                         result.forEach(item => {
    //                             item.date = moment(item.date).format("YYYY-MM-DD")
    //                         })
    //                         res.render("employeeData", { result, employeename: emeplyresult[0] })
    //                     }
    //                 })
    //         })
    // },
    // // WAIT FOR DELETE
    // searchDate: (req, res) => {
    //     console.log(req.query)
    //     knex('clock').where({
    //         "employee_id": req.params.employee_id,
    //         'date': req.query.clock_date
    //     })
    //         .then((result) => {
    //             // res.send(result)
    //             result.forEach(item => {
    //                 item.date = moment(item.date).format("YYYY-MM-DD")
    //             })
    //             res.render('afterSearchData', { result })
    //         })
    // },
    // timeLog: (req, res) => {
    //     knex('employee').where('id', req.params.employee_id)
    //         .then((emeplyresult) => {
    //             return knex('clock').where('employee_id', req.params.employee_id)
    //                 .then((result) => {
    //                     if (result.length) {
    //                         result.forEach(item => {
    //                             item.date = moment(item.date).format("YYYY-MM-DD")
    //                         })
    //                         res.render("timeLog", { result, employeename: emeplyresult[0] })
    //                     }
    //                 })
    //         })
    // },

}
