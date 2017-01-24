var bodyParser = require('body-parser');


var data = [{item:'finish this app'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){


  app.get('/', function(req , res){
    res.render('index', {todos: data});
  });


  app.post('/', urlencodedParser ,function(req, res){
    data.push(req.body);
    res.json(data);
  });

  app.delete('/:item', function(req, res){
    data = data.filter(function(todo){
      return todo.item != req.params.item;
    });
    res.json(data);
  })


};
