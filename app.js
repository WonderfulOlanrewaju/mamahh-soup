const   express = require ('express'),
        app =  express(),
        nodemailer = require ('nodemailer'),
        bodyParser = require ('body-parser'),
        mongoose = require('mongoose'),
        indexController = require ('./controllers/index.js'),
        flash = require('connect-flash'),
        port = process.env.PORT;

// Setting the template engine
app.set("view engine", "ejs");

// Serving resources on public directory
app.use(express.static(__dirname + "/public"));

// configuring flash for usage
app.use(flash());

// Mongoose configuration
let url = 'mongodb://localhost:27017/mamahh';

// let url = process.env.DATABASEURL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

// BodyParser configuration
app.use(bodyParser.urlencoded({
    extended: true
}));

// Using Controller codes and firing up the server
app.use('/', indexController);
const server = app.listen(port, (req, res) => console.log('Mamahh  soup cooked on ' + port));