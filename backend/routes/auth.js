const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';
router.post('/register', async (req,res)=> {
  const {name,email,password} = req.body;
  if(!name || !email || !password) return res.status(400).json({msg:'Missing fields'});
  const existing = await User.findOne({email});
  if(existing) return res.status(400).json({msg:'Email exists'});
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const user = new User({name,email,password:hash});
  await user.save();
 const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET);

  res.json({token, user:{id:user._id, name:user.name, email:user.email}});
});
router.post('/login', async (req,res)=> {
  const {email,password} = req.body;
  if(!email || !password) return res.status(400).json({msg:'Missing fields'});
  const user = await User.findOne({email});
  if(!user) return res.status(400).json({msg:'Invalid credentials'});
  const ok = bcrypt.compareSync(password, user.password);
  if(!ok) return res.status(400).json({msg:'Invalid credentials'});
  const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET);

  res.json({token, user:{id:user._id, name:user.name, email:user.email}});
});
module.exports = router;
