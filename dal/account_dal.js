var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'call account_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO account (email, first_name, last_name) VALUES (?, ?, ?)';
    var queryData = [params.email, params.first_name, params.last_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.getinfo = function (account_id, callback) {
    var query = 'call account_getinfo(?)';
    var queryData = [account_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};


exports.update = function (params, callback) {
    var query = 'update account set first_name = ?, last_name = ?, email = ? where account_id = ?';
    var queryData = [params.first_name, params.first_name, params.email, params.account_id];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

exports.delete = function(params, callback) {
    var query = 'delete from account where account_id = ?';
    var queryData = [params.account_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};