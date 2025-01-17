const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const  mongoose = require('mongoose');

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




module.exports = router;