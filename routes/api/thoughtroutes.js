const router = require('express').router();

const {
    getAllThoughts,
    getThoughtByID,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thoughtcontroller')

router

    .route('/').get(getThoughts).post(createThoughts);

router
    .route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

    module.exports = router;