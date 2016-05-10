
//const express = require('express');
//var router = express.Router();

module.exports = function(app){
    var users = [{"mesa": 1, "pwd": "123"}, {"mesa": 2, "pwd": "123"}];
    
   app.get('/login', function(rec, resp){
        resp.render('index');
    });
    
   app.post('/login', function(rec, resp){
        var mesa = rec.body.mesa;
        var pass = rec.body.pwd;
        
        for(var i in users){
            if(users[i].mesa == mesa && users[i].pwd== pass) {
                
                rec.session.users=users[i];
                resp.render('menu')
            }
        }
        resp.redirect('/login');
    } );
    
   app.delete('/logout', function(rec, resp){
        delete rec.session.users;
        resp.redirect('/');
    } );
    
    //app.use(dir, router);

}