const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';
module.exports = (req,res,next)=> {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if(!token) return res.status(401).json({msg:'No token'});
  try{
    const data = jwt.verify(token, JWT_SECRET);
    req.userId = data.id;
    next();
  }catch(e){
    return res.status(401).json({msg:'Invalid token'});
  }
};
