// Copyright (c) 2019 WingGroup LLC

var fs = require('fs');
var wingchain = require('./wingchain');
var crypto = require('./crypto');

function main() {
    wingchain.wc_init(function(err){
        if(err) {
            console.log(err);
        } else {
            crypto.gen_key_pair(function(key){
                console.log(key);
            });
        }
    });
}

main();