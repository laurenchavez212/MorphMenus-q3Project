const admin = require("../controllers/admin.js");

module.exports = function (app) {

    app.get('/admin/:id', admin.adminPG);
    app.get('/all', admin.all);
    
}