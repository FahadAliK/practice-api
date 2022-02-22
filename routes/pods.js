const express = require('express');

const {
  getPods,
  getPod,
  createPod,
  updatePod,
  deletePod,
} = require('../controllers/pods');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// router.use(protect, authorize('admin'));

router.route('/').get(getPods).post(createPod);

router.route('/:id').get(getPod).put(updatePod).delete(deletePod);

module.exports = router;
