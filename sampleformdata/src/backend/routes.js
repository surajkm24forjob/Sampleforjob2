const express = require('express');
const router = express.Router();
let multer = require('multer');
const bcrypt = require('bcrypt');
const  mongoose = require('mongoose');
const userdetail = require('../backend/Userdetails');

 const storage = multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,'uploads/');
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+'-'+file.originalname);
        }

})

const upload = multer({
    storage:storage,
})


const AdminloginSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

// Bind the schema to the existing 'AdminLogin' collection
const Adminlogin = mongoose.model('adminlogin', AdminloginSchema, 'adminlogin');

router.post('/login',async(req,res)=>{
       try {
        const {username,password} = req.body;
        console.log("Received request body: " + JSON.stringify(req.body));
        const Admin = await Adminlogin.findOne({username});
       
        if(!Admin){
            console.log("Admin not found")
            return res.status(400).json({message:'Invalid user'})
            
        }

       
        if (password!==Admin.password) {
            console.log("Password is not valid");
                return res.status(400).json({ message: 'Invalid password' });
                
        }
      res.json({message:'Admin logged in successfully'})
      
      console.log("Admin logged in")
       } catch (error) {
        console.log("error", error);
    
       }
})


router.post('/userdata' ,  upload.array('files'),async(req,res)=>{
    try {
        const {name, socialmediahandle} = req.body;
        
        console.log("Received request body: " + JSON.stringify(req.body));

        if(!req.files || req.files.length===0){
            return res.status(400).json({message:'Please upload a file'})
        }

     
        const filePath1 = req.files.map(file=>file.path);
     
        const newUser = new userdetail({
                name,
                socialmediahandle,
                files:filePath1,
        });

    await newUser.save();
    res.status(201).json({message:"User Data added Successfully",user:newUser});
    } catch (error) {
        console.error('Error:'  +error );
        res.status(500).json({message:"Internal server error", error:error.message});
    }
})


module.exports = router;