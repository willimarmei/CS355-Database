var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'call skill_getall()';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function (skill_id, callback) {
    var query = 'call skill_getinfo(?)';
    var queryData = [skill_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);

    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO skill (skill_name, description) VALUES (?, ?)';
    var queryData = [params.skill_name, params.description];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.update = function (params, callback) {
    var query = 'update skill set skill_name = ?, description = ? where skill_id = ?';
    var queryData = [params.skill_name, params.description, params.skill_id];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });

};