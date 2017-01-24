var express = require('express');
var todoController = require('./controllers/controller')
var app = express();

//set up view engine
app.set('view engine', 'ejs');


// get access to the static files inside public dir.
app.use(express.static('./public'));

todoController(app);




//set up local port hosting
app.listen(3000);
console.log('You are live on port 3000');
