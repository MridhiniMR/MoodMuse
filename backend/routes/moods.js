const express = require('express');
const router = express.Router();
const moodsData = require('../seedData/moods.json');
router.get('/', (req,res)=> {
  res.json(Object.keys(moodsData));
});
router.get('/:mood', (req,res)=> {
  const mood = req.params.mood.toLowerCase();
  const data = moodsData[mood];
  if(!data) return res.status(404).json({msg:'Mood not found'});
  res.json(data);
});
module.exports = router;
