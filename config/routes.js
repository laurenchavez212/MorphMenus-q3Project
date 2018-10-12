const admin = require("../controllers/admin.js");

module.exports = function (app) {

    app.get('/admin/:id', admin.adminPG);
    app.get('/menu/:id', admin.menu);
    app.post("/menu/:id", admin.postItems);
    app.delete("/menu/:id", admin.deleteItem);
    
}