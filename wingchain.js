// Copyright (c) 2019 WingGroup LLC

var fs = require('fs');

exports.wc_init = function(cb) {
    this.wc_file_load(function(err){
        cb(err);
    });
}

exports.wc_file_load = function(cb) {
    fs.readFile( __dirname + '/wingchain.json', function(err, data) {
        if(err) {
            cb(err);
        } else {
            JSON.parse(data);
            cb();
        }
    });
}

exports.wc_add_block = function(cb) {

}

