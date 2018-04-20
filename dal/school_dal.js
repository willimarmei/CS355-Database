var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'call school_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function (school_id, callback) {
    var query = 'call school_getinfo(?)';
    var queryData = [school_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO school (school_name, address_id) VALUES (?, ?)';
    var queryData = [params.school_name, params.address_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.update = function (params, callback) {
    var query = 'update school set school_name = ?, address_id = ? where school_id = ?';
    var queryData = [params.school_name, params.address_id, params.school_id];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });

};