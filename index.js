//1.  IMPORT NPM LIBRARIES FROM node_modules
const express = require('express');
const bodyParser = require('body-parser');

//2.  CREATE APP
const app = express();

//3.  USE BODY PARSER IN APP
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//4.  CREATE THE ROUTE
const actionsRoute = require('./actions');
app.use('/api', actionsRoute);

//5.  CREATE VIRTUAL SERVER ENVIRONMENT
const port = 5000;
app.listen(port, function(){
    console.log(`Server is working via port ${port}`);
});


