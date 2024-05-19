const jwt = require('jsonwebtoken');

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Protecting the route to get seller details
app.get('/api/seller-details', authenticateToken, async (req, res) => {
  try {
    const seller = await User.findById(req.user.id);
    res.json(seller);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
