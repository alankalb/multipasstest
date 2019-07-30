const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var Multipassify = require('multipassify');

const port = parseInt(process.env.PORT, 10) || 3000

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

router.get('/javascript/frontend.js',function(req,res){
  res.sendFile(path.join(__dirname + '/javascript/frontend.js'));
});

router.post('/multipass',function(req,res){
   
    var multipassify = new Multipassify("593b9f2a31d3b37b45eda6a35e687885");

    var customerData = { email: 'alan.kalbfleisch@shopify.com', return_to:"http://alankalb.myshopify.com/account"};

    var token = multipassify.encode(customerData);

    var url = multipassify.generateUrl(customerData, "alankalb.myshopify.com");

    res.send(url);
});

app.use(express.json())
app.use('/', router);

app.listen(port, function(){
  console.log('Running at Port ' + port);
});