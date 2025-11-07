const mongoose = require('mongoose');
const data = require('./seedData/moods.json');
const fs = require('fs');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/moodmuse').then(async ()=>{
  console.log('connected');
  process.exit(0);
}).catch(e=>{
  console.error(e);
  process.exit(1);
});
