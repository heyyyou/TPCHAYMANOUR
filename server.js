require('./models/db'); // importer fichier db.js situé dans folder models 
const express=require('express'); // importer package express 
const path =require('path');
const exphbs=require("express-handlebars");

const bodyparser=require('body-parser');
const employeeController=require('./controllers/emloyeeController');
var app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:"mainLayout",layoutsDir:__dirname+'/views/layouts'}));
app.set('view engine','hbs')

app.listen(3000,()=>{console.log('Express server started at port:3000');});
//creation my own server 
app.use('/employee',employeeController);
// il va utiliser le controlleur employeeController pour importer les donneés de serveur DB au server.js (my own server)
