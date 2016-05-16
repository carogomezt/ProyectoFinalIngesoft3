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
    if(req.body.cant4 != '' & req.body.cant4!='0'){
      var plato4 = {
      descrip: req.body.descrip4,
      cant: req.body.cant4,
      value: req.body.val4
      }
      platos.push(plato4);
    }
    if(req.body.cant5 != '' & req.body.cant5!='0'){
      var plato5 = {
      descrip: req.body.descrip5,
      cant: req.body.cant5,
      value: req.body.val5
      }
      platos.push(plato5);
    }
    if(req.body.cant6 != '' & req.body.cant6!='0'){
      var plato6 = {
      descrip: req.body.descrip6,
      cant: req.body.cant6,
      value: req.body.val6
      }
      platos.push(plato6);
    }
    if(req.body.cant7 != '' & req.body.cant7!='0'){
      var plato7 = {
      descrip: req.body.descrip7,
      cant: req.body.cant7,
      value: req.body.val7
      }
      platos.push(plato7);
    }
    if(req.body.cant8 != '' & req.body.cant8!='0'){
      var plato8 = {
      descrip: req.body.descrip8,
      cant: req.body.cant8,
      value: req.body.val8
      }
      platos.push(plato8);
    }
    if(req.body.cant9 != '' & req.body.cant9!='0'){
      var plato9 = {
      descrip: req.body.descrip9,
      cant: req.body.cant9,
      value: req.body.val9
      }
      platos.push(plato9);
    }
    if(req.body.cant10 != '' & req.body.cant10!='0'){
      var plato10 = {
      descrip: req.body.descrip10,
      cant: req.body.cant10,
      value: req.body.val10
      }
      platos.push(plato10);
    }
    if(req.body.cant11 != '' & req.body.cant11!='0'){
      var plato11 = {
      descrip: req.body.descrip11,
      cant: req.body.cant11,
      value: req.body.val11
      }
      platos.push(plato11);
    }
    if(req.body.cant12 != '' & req.body.cant12!='0'){
      var plato12 = {
      descrip: req.body.descrip12,
      cant: req.body.cant12,
      value: req.body.val12
      }
      platos.push(plato12);
    }

    res.render('pedidos', {platos: platos});
  });

  app.use(mountPoint, router);
}
