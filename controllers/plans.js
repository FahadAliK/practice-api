const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Plan = require('../models/Plan');

// @desc      Get all plans
// @route     GET /api/v1/plans
// @access    Private
exports.getPlans = asyncHandler(async (req, res, next) => {
  const plans = await Plan.find();
  res.status(200).json({ success: true, count: plans.length, data: plans });
});

// @desc      Get single plan
// @route     GET /api/v1/plans/:id
// @access    Private
exports.getPlan = asyncHandler(async (req, res, next) => {
  const plan = await Plan.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: plan,
  });
});

// @desc      Create plan
// @route     POST /api/v1/plans
// @access    Private
exports.createPlan = asyncHandler(async (req, res, next) => {
  const plan = await Plan.create(req.body);

  res.status(201).json({
    success: true,
    data: plan,
  });
});

// @desc      Update plan
// @route     PUT /api/v1/plans/:id
// @access    Private/Admin
exports.updatePlan = asyncHandler(async (req, res, next) => {
  const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: plan,
  });
});

// @desc      Delete plan
// @route     DELETE /api/v1/plans/:id
// @access    Private/Admin
exports.deletePlan = asyncHandler(async (req, res, next) => {
  const deletedPlan = await Plan.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: deletedPlan,
  });
});
