const userservice=require("../services/user_services");
exports.register=async(req,res,next)=>{
    try{
        const{email,password}=req.body;
        const sucessresres=await userservice.registeruser(email,password);
        res.json({status:true,success:"User registered"});
    }
    catch(err){
        throw err;
    }
}