const express = require('express');
var router = express.Router();

var users = [{"mesa": 1, "pwd": "123"},
             {"mesa": 2, "pwd": "123"},
            ];

module.exports = function(app, mountPoint) {
  app.get('/', function(req, res){
    res.render('index');
  });

  app.post('/login', function(req, res) {
    var mesa = req.body.mesa;
    var pass = req.body.pwd;

    for(var i in users) {
      if(users[i].mesa == mesa && users[i].pwd == pass) {
        req.session.users = users[i];
        res.render('menu');
      }
    }
    res.redirect('/login');
  });

  app.delete('/logout', function(req, res) {
    delete req.session.users;
    res.redirect('/');
  });

  app.use(mountPoint, router);
}
