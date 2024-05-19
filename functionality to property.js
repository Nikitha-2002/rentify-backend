// Add like functionality to property
app.post('/api/properties/:id/like', authenticateToken, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    property.likes = property.likes ? property.likes + 1 : 1;
    await property.save();
    res.json({ likes: property.likes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
