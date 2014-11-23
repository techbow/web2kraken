'use strict';

var IndexModel = require('../models/index');
var AboutModel = require('../models/about');

module.exports = function (router) {
    var model = new IndexModel();
    var aboutModel = new AboutModel();

    router.get('/', function (req, res) {
        res.render('index', model);
    });

    router.get('/home', function (req, res) {
        res.render('index', model);
    });

    router.get('/about', function (req, res) {
        res.render('about', aboutModel);
    });
};