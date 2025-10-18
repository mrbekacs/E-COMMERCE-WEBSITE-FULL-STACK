import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";

// The route for user login
const loginUser = async (req, res) => {

}

// The route for user register
const registerUser = async (req, res) => {
   try {

      const { name, email, password } = req.body;

      //Checkpoint if user exists or not
      const exists = await userModel.findOne({email})
      if (exists) {
         return res.json({success:false, message:"User already exists"});
      }

      // Checkpoint for validation of email format & password
      if (!validator.isEmail(email)) {
         return res.json({success:false, message:"Please enter a valid email"})
      }

      if (password.length < 8) {
         return res.json({success:false, message:"Please enter a strong/longer password"})
      }

      // Hashing the user password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt)

      const newUser = new userModel({
         name,
         email,
         password,
      })



   } catch (error) {

   }
}

// The route for admin login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }