var express = require('express');
var router = express.Router();
var address_dal = require('../dal/address_dal');
// var company_dal = require('../dal/company_dal');

/* GET users listing. */
router.get('/all', function(req, res) {
    address_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('address/address_view_all', {address:result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    address_dal.getAll(function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.render('address/address_add');
        }
    })
});

router.get('/insert', function(req, res) {
    address_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/address/all');
        }

    });
});

router.get('/edit', function(req, res) {
    address_dal.getinfo(req.query.address_id, function (err, result) {
        if(err) {req.send(err); }
        else {
            res.render('address/address_update',
                {address: result[0][0]}
            );
        }

    });
});

router.get('/update', function (req, res) {
    address_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/address/all');
        }
    });
});

router.get('/delete', function (req, res) {
    address_dal.delete(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/address/all');
        }
    });
});

module.exports = router;