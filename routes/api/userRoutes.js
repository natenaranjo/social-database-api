const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addUserFriend,
    removeUserFriend,
} = require('../../controllers/userController');

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/')
    .post(addUserFriend);

router
    .route('/:userId/friends/:friendId')
    .delete(removeUserFriend);

module.exports = router;