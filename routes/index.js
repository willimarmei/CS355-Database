var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'CS355', subtitle: 'Lab 9' });
});

/* GET Template Example */
router.get('/template_example', function(req, res, next){
    res.render('template_example', {first_name: req.query.first_name, last_name:
        req.query.last_name, title: 'CS355'})

});


router.get('/template_resume', function(req, res, next){
    res.render('template_resume', {first_name: req.query.first_name, last_name:
        req.query.last_name, major: 'CS'})

});

module.exports = router;