const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Setting = require('../models/Setting');

// @desc      Get all settings
// @route     GET /api/v1/settings
// @access    Private
exports.getSettings = asyncHandler(async (req, res, next) => {
  const settings = await Setting.find();
  res
    .status(200)
    .json({ success: true, count: settings.length, data: settings });
});

// @desc      Get single setting
// @route     GET /api/v1/settings/:id
// @access    Private
exports.getSetting = asyncHandler(async (req, res, next) => {
  const setting = await Setting.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: setting,
  });
});

// @desc      Create setting
// @route     POST /api/v1/settings
// @access    Private
exports.createSetting = asyncHandler(async (req, res, next) => {
  const setting = await Setting.create(req.body);

  res.status(201).json({
    success: true,
    data: setting,
  });
});

// @desc      Update setting
// @route     PUT /api/v1/settings/:id
// @access    Private/Admin
exports.updateSetting = asyncHandler(async (req, res, next) => {
  const setting = await Setting.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: setting,
  });
});

// @desc      Delete setting
// @route     DELETE /api/v1/settings/:id
// @access    Private/Admin
exports.deleteSetting = asyncHandler(async (req, res, next) => {
  const deletedSetting = await Setting.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: deletedSetting,
  });
});
