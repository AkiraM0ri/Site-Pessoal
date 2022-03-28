const express = require('express');
const app = express();
const exphbs = require('express-handlebars').engine;
const http = require('http'), https = require('https');
const fs = require('fs')
const securePort = process.argv[2] == '-dev' ? 3001 : 443;
const unsecurePort = process.argv[2] == '-dev' ? 3000 : 80;

// Certificate
const credentials = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.cert')
}


app.use(express.static(__dirname + "/public"));

app.set("view engine","hbs");
app.engine('hbs', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'index',
    }));

app.get('/', (req,res)=>{
    res.render("main");
});

app.listen(port, ()=>{
    console.log(`aberto na porta ${port}`);
});

// Starting both http & https servers
const httpServer = http.createServer(app), httpsServer = https.createServer(credentials, app)

httpServer.listen(unsecurePort, console.log('HTTP Server running on port ' + unsecurePort))
httpsServer.listen(securePort, console.log('HTTPS Server running on port ' + securePort))
