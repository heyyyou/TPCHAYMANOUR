const mongoose =require ('mongoose');
var employeeSchema=new mongoose.Schema(
    {
        fullName:{
    type:String,required:'this field is required'},// si l fullname is empty ou n 'est pas string message d erreur au niveau terminal
    email:{
        type:String},
        mobile:{
            type:Number},
            city:{
                type:String}
});

employeeSchema.path('email').validate((val)=>{emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return emailRegex.test(val);
},'invalid Email');

mongoose.model('Employee',employeeSchema); // le modele eli besh yets3mlu mongoose pour Crud .(object)
