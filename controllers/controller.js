var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://test:test@ds011933.mlab.com:11933/todo');


var todoSchema = new mongoose.Schema({
  item:String
});

var Todo = mongoose.model('Todo', todoSchema);


// var data = [{item:'finish this app'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){


  app.get('/', function(req , res){
    //dataa from mongodb
    Todo.find({},function(err, data){
      if(err) throw err;
      res.render('index', {todos: data});
    });
  });


  app.post('/', urlencodedParser ,function(req, res){
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    })
  });

  app.delete('/:item', function(req, res){
    Todo.find({item: req.params.item}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });


};
