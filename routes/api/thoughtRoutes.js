const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addThoughtReaction,
    removeThoughtReaction,
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getThought)
    .post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reaction/:reactionId')
    .post(addThoughtReaction);

router
    .route('/:thoughtId/reaction/:reactionId')
    .delete(removeThoughtReaction);

module.exports = router;