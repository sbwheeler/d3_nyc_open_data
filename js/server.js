var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname + '/../')).listen(process.env.PORT || 1337, function(){
    console.log('Server running on 1337...');
});
