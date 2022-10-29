const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addThoughtReaction,
    deleteThoughtReaction,
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getThoughts)
    .post(createThought);

router
    .route('/:throughtID')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reaction/:reactionId')
    .post(addThoughtReaction);

router
    .route('/:thoughtId/reaction/:reactionId')
    .delete(deleteThoughtReaction);

module.exports = router;