var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



// var db = require("./models/users");
// var adminDb = require("./modal/adminSchool");
// var reviewDb = require("./modal/addReview");
// var reviewUserRegisterDb = require("./modal/userRegister");
// var addSchoolDb = require("./modal/addSchoolByUser");
// var schoolDetailActiveDb = require("./modal/activeSchoolDetail");
// var advertiseDb = require("./modal/advertisement");
// var dscussDb = require("./modal/discuss");
// var postDb = require("./modal/post");
// var vacncyDb = require("./modal/vacncy");



var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json({limit: '50mb'}));


var mongoDB = 'mongodb://localhost/loundary';
mongoose.connect(mongoDB, { useNewUrlParser: true , useCreateIndex: true},
    function(err, conn) {
        if (err) {
            console.log("error occured")
        } else {
            console.log("connected")
        }
    });
app.use(express.static(path.join(__dirname, '/dist')));




app.get('/*', (req, res) => {
res.sendFile(__dirname + '/dist/index.html')
});


app.listen(8080, function() {
    console.log('Loundary Server up: http://localhost:', 8080);
}); 
