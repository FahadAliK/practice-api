const express = require('express');

const {
  getPlans,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan,
} = require('../controllers/plans');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// router.use(protect, authorize('admin'));

router.route('/').get(getPlans).post(createPlan);

router.route('/:id').get(getPlan).put(updatePlan).delete(deletePlan);

module.exports = router;
