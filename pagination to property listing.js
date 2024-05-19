// Add pagination to property listing
app.get('/api/properties', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const properties = await Property.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Property.countDocuments();
    res.json({
      properties,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
