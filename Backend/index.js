var express = require('express');
var app = express();
const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'www/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);
app.listen(port,  () => {console.log('Example app listening on port 3000!');});