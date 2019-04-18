var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'dist')));
app.listen(port, function() {
  console.log('listening on port ', port);
});
