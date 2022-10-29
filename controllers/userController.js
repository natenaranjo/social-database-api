const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findByIdAndDelete({ _id: req.params.userId })
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user was found with that ID' })
                    : res.status(user)
            )
            .then(() => res.json({ message: 'User was deleted' }))
            .catch ((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((dbUserData) => 
                !user
                    ? res.status(404).json({ message: 'No user was found with this ID' })
                    : res.json(dbUserData)
        )
        .catch((err) => res.status(500).json(err));
    },
    addFriend({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $addToSet: { friends: params.friendId } },
          { new: true, runValidators: true }
        )
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: "No user with this ID" });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.json(err));
      },
      removeFriend({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: params.friendId } },
          { new: true }
        )
          .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: "No user with this ID" });
            }
            res.json(dbUserData);
          })
          .catch((err) => res.json(err));
      },
};