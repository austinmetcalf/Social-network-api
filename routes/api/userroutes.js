const router = require('express').Router();
const {
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getAllUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;