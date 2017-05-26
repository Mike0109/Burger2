var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var PORT = process.env.PORT || 3000;


var db = require("./models");


app.use(express.static("public"));


app.use(methodOverride('_method'));


app.use(bodyParser.urlencoded({ extended: false }));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);



db.sequelize.sync({force: true}).then(function(){
	app.listen(PORT, function(){
	console.log("listenning on http://localhost:" + PORT);
});
});