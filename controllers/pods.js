const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Pod = require('../models/Pod');

// @desc      Get all pods
// @route     GET /api/v1/pods
// @access    Private
exports.getPods = asyncHandler(async (req, res, next) => {
  const pods = await Pod.find();
  res.status(200).json({ success: true, count: pods.length, data: pods });
});

// @desc      Get single pod
// @route     GET /api/v1/pods/:id
// @access    Private
exports.getPod = asyncHandler(async (req, res, next) => {
  const pod = await Pod.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: pod,
  });
});

// @desc      Create pod
// @route     POST /api/v1/pods
// @access    Private
exports.createPod = asyncHandler(async (req, res, next) => {
  const pod = await Pod.create(req.body);

  res.status(201).json({
    success: true,
    data: pod,
  });
});

// @desc      Update pod
// @route     PUT /api/v1/pods/:id
// @access    Private/Admin
exports.updatePod = asyncHandler(async (req, res, next) => {
  const pod = await Pod.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: pod,
  });
});

// @desc      Delete pod
// @route     DELETE /api/v1/pods/:id
// @access    Private/Admin
exports.deletePod = asyncHandler(async (req, res, next) => {
  const deletedPod = await Pod.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: deletedPod,
  });
});
