var express = require('express');
var app = express();
const path = require('path');
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors());

app.use(express.static(path.join(__dirname, 'www')));
app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.get('/api/mante', (req, res) => {
    fs.readFile('api/products/mante.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Errore durante la lettura del file JSON:', err);
        return res.status(500).send('Errore interno del server');
      }
  
      const productsData = JSON.parse(data);
      console.log(typeof productsData);
      res.setHeader('Content-Type', 'application/json');
      res.json(productsData);
    });
  });
  
const port = process.env.PORT || '3000';
app.set('port', port);
app.listen(port,  () => {console.log('Example app listening on port 3000!');});