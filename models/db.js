//MongoClient constructor
const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{ 
    if(!err){console.log('MongoDB connection Succeed  ')}
else {console.log('Error in DB connection :'+err)}

});
require('./employee.model');
// serveur de BD MongoDB 

