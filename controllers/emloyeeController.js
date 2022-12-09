const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Employee =mongoose.model('Employee'); // from employee.model.js à travers ce model mongoos va generer BD
router.get('/',(req,res)=>{res.render("employee/addOrEdit",{viewTitle:"TP 2 :Meriem Chelli (ajouter produits) "});}); // send data viewTitle to addorEdit (html) 
router.post('/',(req,res)=> {
    insertRecord(req,res);});
   

    // function updateRecord(req,res){
    //     Employee.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{
    //         if(!err){res.redirect('employee/list');}
    //         else{
    //             if(err.name=='validationError'){
    //                 handleValidationError(err,req.body);
    //                 res.render("employee/addOrEdit",{
    //                     viewTitle:'Update Employee',
    //                     employee:req.body
    //                 });
    //             }
    //         else
    //         console.log("error during update"+err);}
    //     });



    // send data(eli jebhom m form (post action)) to Database EmloyeeDB=> collection =>employees
function insertRecord(req,res){
    var employee=new Employee();
    employee.fullName=req.body.fullName;
    employee.email=req.body.Email;
    employee.mobile=req.body.mobile;
    employee.city=req.body.city;
    employee.save((err,doc)=>{ if(!err) // ajouter new documents to collection ( on a fait la redirection => list pour vérifier sar l ajout wala le )
    res.redirect('employee/list')
else{
    if(err.name=="validationError")
    handleValidationError(err,req.body);
    router.get('/',(req,res)=>{res.render("employee/addOrEdit",{viewTitle:"TP 2 :Meriem Chelli (ajouter produits) ",employee:req.body});}); // send data viewTitle to addorEdit (html) 

    console.log('error during record insertion:'+err);
}});
router.get('/list',(req,res)=>{res.json('form list')}); // fichier bsh n5alwhuch fergh w brh

}

router.get('/list',(req,res)=>{
Employee.find((err,docs)=>{res.render("employee/list",{list:docs});}).lean()})
  





function handleValidationError(err,body){
   for(field in  err.errors){
       switch (err.errors[field].path){//[fields] fullname email number and city
           case 'fullName':
body['fullNameError']=err.errors[field].message; //this field is required se trouve ds employee.model.js
break;
case 'email':
    body['emailError']=err.errors[field].message; //this field is required se trouve ds employee.model.js
    break;
    default: 
    break ;

} 
   }
}
router.get('/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("employee/addOrEdit",{
                viewTitle:"update Employee",
                employee:doc
            });
        }
    });
    });
    router.get('/delete/:id',(req,res)=>{
Employee.findByIdAndRemove(req.params.id,(err,doc)=>{ 
    if(!err){
        res.redirect('/employee/list');}
        else{
            console.log('error in employee delete:'+err);}});

        
    
});
    
module.exports=router; 
