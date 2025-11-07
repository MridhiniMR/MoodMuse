const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) return res.status(400).json({ msg: 'All fields required' });
  const fb = new Feedback({ name, message });
  await fb.save();
  res.json({ msg: 'Feedback received!' });
});

router.get('/', async (req, res) => {
  const all = await Feedback.find().sort({ date: -1 });
  res.json(all);
});

module.exports = router;
