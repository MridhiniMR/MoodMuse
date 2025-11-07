const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
  favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Favorite'}]
});
module.exports = mongoose.model('User', UserSchema);
