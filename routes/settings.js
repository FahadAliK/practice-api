const express = require('express');

const {
  getSettings,
  getSetting,
  createSetting,
  updateSetting,
  deleteSetting,
} = require('../controllers/settings');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// router.use(protect, authorize('admin'));

router.route('/').get(getSettings).post(createSetting);

router.route('/:id').get(getSetting).put(updateSetting).delete(deleteSetting);

module.exports = router;
