const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/auth');
const moodRoutes = require('./routes/moods');
const favRoutes = require('./routes/favorites');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/moods', moodRoutes);
app.use('/api/favorites', favRoutes);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/moodmuse').then(()=> {
  app.listen(PORT, ()=> console.log('Server running on', PORT));
}).catch(err => {
  console.error(err);
  process.exit(1);
});
const feedbackRoutes = require('./routes/feedback');
app.use('/api/feedback', feedbackRoutes);
