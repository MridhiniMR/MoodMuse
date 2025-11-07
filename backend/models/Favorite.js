const mongoose = require('mongoose');
const FavSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  type: String,
  mood: String,
  title: String,
  src: String
});
module.exports = mongoose.model('Favorite', FavSchema);
