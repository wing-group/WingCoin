// Copyright (c) 2019 WingGroup LLC

var EC = require('elliptic').ec;

var ecdsa = new EC('secp256k1');

exports.gen_key_pair = function(cb) {
    var key = ecdsa.genKeyPair();
    cb(key);
}