const admin = require("../controllers/admin.js");

module.exports = function (app) {
    app.use((req, res, next) => {
        console.log(req.url);
        next();
    })
    app.get('/admin/:id', admin.adminPG);
    app.get('/menu/:id', admin.menu);
    app.post("/menu/:id", admin.postItems);
    app.delete("/menu/:id", admin.deleteItem);
    app.patch("/menu/:id", admin.updateItem);
    
}