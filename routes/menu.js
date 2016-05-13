const express = require('express');
var router = express.Router();

// Funcion que valida si se inicio sesion para poder acceder a la opciones del menu
function loginRequired(req, res, next) {
  console.log("HOLA");
  if (req.session.user) {
    next();
  }
  else res.redirect('/');
}

module.exports = function(app, mountPoint) {
  router.get('/menuRest', function(req, res) {
  	res.render('menuRest');
  });
  router.get('/pedidos', function(req, res) {
  	res.render('pedidos');
  });

  app.use(mountPoint, router);
}
