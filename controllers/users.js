const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ success: true, count: users.length, data: users });
});

// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Create user
// @route     POST /api/v1/users
// @access    Private
exports.createUser = asyncHandler(async (req, res, next) => {
  console.log(req.user, req.body);
  const createrRole = req.user;
  const toBeCreatedRole = req.body;
  if (!(createrRole === 'super admin' && toBeCreatedRole === 'admin')) {
    next(new ErrorResponse('Only super admin can create admin.'));
  }
  if (!(createrRole === 'admin' && toBeCreatedRole === 'seller')) {
    next(new ErrorResponse('Only admin can create seller.'));
  }
  if (!(createrRole === 'seller' && toBeCreatedRole === 'user')) {
    next(new ErrorResponse('Only seller can create user.'));
  }
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

// @desc      Update user
// @route     PUT /api/v1/users/:id
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Delete user
// @route     DELETE /api/v1/users/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: deletedUser,
  });
});
