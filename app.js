
/**
 * Module dependencies.
 */

var express = require('express')
  , controllers = require('./controllers')
  //, routes = require('./routes')
  //, user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// 환경 셋팅
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// 사용활 환경 셋팅
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) 
{
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/users', user.list);
app.get('/', controllers.index);

http.createServer(app).listen(app.get('port'), function()
                                               {
                                                 console.log('Express server listening on port ' + app.get('port'));
                                               });
