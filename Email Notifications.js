const nodemailer = require('nodemailer');

// Email setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send email notifications
app.post('/api/properties/:id/interested', authenticateToken, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('owner');
    const buyer = await User.findById(req.user.id);

    // Send email to the seller
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: property.owner.email,
      subject: 'Someone is interested in your property',
      text: `Buyer ${buyer.firstName} ${buyer.lastName} is interested in your property. Contact them at ${buyer.email}.`,
    });

    // Send email to the buyer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: buyer.email,
      subject: 'Property Interest Confirmation',
      text: `You have shown interest in the property at ${property.place}. Contact the owner at ${property.owner.email}.`,
    });

    res.json({ message: 'Interest expressed and emails sent' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
