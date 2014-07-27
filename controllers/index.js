
var init_tasks = require('../models/init-task.js');
var mongoose = require('mongoose');

exports.index = function(req, res)
{
  mongoose.connect('mongodb://localhost');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback()
                  {
                    console.log('성공');
                  });
  
  far
  // create schema
  var kitty_schema = mongoose.Schema( { name : String } );
  
  kitty_schema.methods.speak = function()
                              {
                                var greeting = this.name;
                                console.log('name :' + this.name);
                              };
  
  var kitten = mongoose.model('kitty', kitty_schema);
  
  var kyunghun = new kitten( {name : 'kynghun'});
  
  kyunghun.speak();
  kyunghun.save(function(err, kyunghun)
                {
                  if(err)
                  {
                    throw err;
                  }
                });
  
  kitten.find(function(err, value)
              {
                if(err)
                {
                  throw err;
                }
              console.log('name:' + value);
              });
  
  
  res.render('index', {
                        title : 'My Sex Board',
                        todoTasks : init_tasks.get_tasks().todo,
                        inProgressTasks : init_tasks.get_tasks().inProgress,
                        doneTasks : init_tasks.get_tasks().done
                      }
            );
};
