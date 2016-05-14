const express = require('express');
var router = express.Router();

// Funcion que valida si se inicio sesion para poder acceder a la opciones del menu


module.exports = function(app, mountPoint) {
  function loginRequired(req, res, next) {
  if (req.session.user) {
    next();
  }
  else res.redirect('/');
} 
  router.get('/', loginRequired, function(req, res) {
    if(req.session.user)
      res.render('menu');
    else{
      res.redirect('/');
    }
  });
  router.get('/menuRest', loginRequired, function(req, res) {
    if(req.session.user)
      res.render('menuRest');
    else{
      res.redirect('/');
    }
  });
  router.get('/pedidos', loginRequired, function(req, res) {
    if(req.session.user)
      res.render('pedidos', {platos:[]});
    else{
      res.redirect('/');
    }
  });
  router.post('/pedidos', loginRequired, function(req, res) {
    var platos = [];
    if(req.body.cant1!='' & req.body.cant1!='0'){
      var plato1 = {
      descrip: req.body.descrip1,
      cant: req.body.cant1,
      value: req.body.val1
      }
      platos.push(plato1);
    }
    if(req.body.cant2 != '' & req.body.cant2!='0'){
      var plato2 = {
      descrip: req.body.descrip2,
      cant: req.body.cant2,
      value: req.body.val2
      }
      platos.push(plato2);
    }
    if(req.body.cant3 != '' & req.body.cant3!='0'){
      var plato3 = {
      descrip: req.body.descrip3,
      cant: req.body.cant3,
      value: req.body.val3
      }
      platos.push(plato3);
    }
    res.render('pedidos', {platos: platos});
  });

  app.use(mountPoint, router);
}
