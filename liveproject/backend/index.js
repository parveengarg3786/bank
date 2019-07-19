// Import express
let express = require('express');
var jwt = require('jsonwebtoken');
// Initialize the app
let app = express();
// Import Body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');
let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods",'DELETE,PUT,GET,POST');
res.header("Access-Control-Allow-Headers", "Authorization,Origin, X-Requested-With, Content-Type, Accept");
next();
});
app.set('secretKey', 'nodeRestApi'); // jwt secret token
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/db1');
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;
app.get('/',(req,res)=>res.send("hello world with express"));


// Use Api routes in the App

 app.use('/api', apiRoutes)
//  function validateUser(req, res, next) {
//      jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
//        if (err) {
//          res.json({status:"error", message: err.message, data:null});
//        }else{
//          // add user id to request
//          req.body.userId = decoded.id;
//          next();
//        }
//     });}

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
