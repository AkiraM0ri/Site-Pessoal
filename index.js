const express = require('express');
const app = express();
const port = process.argv[2] == '-dev' ? 3000 : 80;
const exphbs = require('express-handlebars').engine;

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