var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
console.log('ready');


// Middleware para acceso a recursos estáticos
app.use(express.static(__dirname));

console.log('steady');
app.listen(3000);
console.log('go');
