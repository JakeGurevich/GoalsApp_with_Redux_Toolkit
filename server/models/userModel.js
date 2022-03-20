const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.findByCredentials= async(email,password)=>{
 let user =await User.findOne({email})
 if(!user){
   throw new Error('Unable to login')
 }
 const isMatch=await bcrypt.compare(password,user.password)
 
 if(!isMatch){
  throw new Error('Unable to login')
 }
 return user

}

userSchema.pre('save',async function(next){
let user= this
if(user.isModified('password')){

  user.password=await bcrypt.hash(user.password,8)
}
next()
})



function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
   
  });
  return schema.validate(user);
}

const User = mongoose.model("User", userSchema);

module.exports = {User,validate:validateUser};