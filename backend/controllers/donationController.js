const Donation = require('../models/Donation');

// 📦 Get all donations
const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch donations.' });
  }
};

// ➕ Add a new donation
const addDonation = async (req, res) => {
  try {
    const { foodName, quantity, donor, location } = req.body;
    const newDonation = new Donation({ foodName, quantity, donor, location });
    const saved = await newDonation.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to save donation.' });
  }
};

// 📊 Donation trends over time (for charting)
const getDonationTrends = async (req, res) => {
  try {
    const trends = await Donation.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
          },
          total: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const formatted = trends.map(entry => ({
      date: entry._id,
      amount: entry.total
    }));

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving donation trends.' });
  }
};

// 🧠 Donation stats for dashboard
const getDonationStats = async (req, res) => {
  try {
    const total = await Donation.countDocuments();
    const recent = await Donation.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('foodName quantity donor createdAt');

    res.json({ total, recent });
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ message: 'Failed to load donation stats.' });
  }
};

// ✅ Export all controller functions
module.exports = {
  getAllDonations,
  addDonation,
  getDonationTrends,
  getDonationStats, // ✅ This was missing in your version!
};
