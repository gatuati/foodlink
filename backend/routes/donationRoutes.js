const express = require('express');
const router = express.Router();
const {
  getDonationStats,
  getAllDonations,
  addDonation,
  getDonationTrends
} = require('../controllers/donationController');

// GET summary stats
router.get('/stats', getDonationStats);

// GET all donations
router.get('/', getAllDonations);

// POST new donation
router.post('/', addDonation);

// GET donation trends for charts
router.get('/trend', getDonationTrends);

module.exports = router;
