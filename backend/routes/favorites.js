const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Favorite = require('../models/Favorite');
const User = require('../models/User');
router.post('/', auth, async (req,res)=> {
  const {type,mood,title,src} = req.body;
  const fav = new Favorite({user:req.userId,type,mood,title,src});
  await fav.save();
  await User.findByIdAndUpdate(req.userId, {$push:{favorites:fav._id}});
  res.json(fav);
});
router.get('/', auth, async (req,res)=> {
  const favs = await Favorite.find({user:req.userId});
  res.json(favs);
});
router.delete('/:id', auth, async (req,res)=> {
  const id = req.params.id;
  await Favorite.findByIdAndDelete(id);
  await User.findByIdAndUpdate(req.userId, {$pull:{favorites:id}});
  res.json({msg:'deleted'});
});
module.exports = router;
