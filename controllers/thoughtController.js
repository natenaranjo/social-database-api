const { Thought, User } = require('../models');

module.exports = {
    getThought(req, res) {
        Thought.find()
            .select("-___v")
            .sort({ _id: -1 })
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err)) 
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-___v")
            .then((thought) => 
                !thought
                    ? res.status(400).json({ message: 'No thought with this ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then(( thoughts ) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thoughts._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                ? res.status(404).json({
                    message: 'Thought was created, but found no user with that ID',
                })
                : res.json('Thought was created!')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) => 
                !thought
                    ? res.status(400).json({ message: 'No thought with this ID' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: 'No thought with this ID' })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
                .then((user) => 
                    !user
                        ? res.status(404).json({ message: 'Thought was deleted but no user with this ID' })
                        : res.json({ message: 'Thought was successfully deleted' })
                )
                .catch((err) => res.status(500).json(err));
    },
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $addToSet: { reactions: body } },
          { new: true, runValidators: true }
        )
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No thought with this id" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.json(err));
      },
    
      // delete reaction
      removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions: { reactionId: params.reactionId } } },
          { new: true }
        )
          .then((dbThoughtData) => res.json(dbThoughtData))
          .catch((err) => res.json(err));
      },
};