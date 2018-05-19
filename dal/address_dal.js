var mysql = require('mysql');
var db = require('./db_connection.js');
// var address_dal = require('../dal/address_dal');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL address_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.accountGetAll = function(callback) {
    var query = 'CALL resume_account_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function (address_id, callback) {
    var query = 'call address_getinfo(?)';
    var queryData = [address_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO address (street, zip_code) VALUES (?, ?)';
    var queryData = [params.street, params.zip_code];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.update = function (params, callback) {
    var query = 'update address set street = ?, zip_code = ? where address_id = ?';
    var queryData = [params.street, params.zip_code, params.address_id];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

exports.delete = function(params, callback) {
    var query = 'call address_delete(?)';
    var queryData = [params.address_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

