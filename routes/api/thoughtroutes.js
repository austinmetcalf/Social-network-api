const router = require('express').Router();
// check spelling matches where it is importing from!
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction,
} = require('../../controllers/thoughtcontroller')

router

    .route('/').get(getAllThoughts).post(createThought);

router
    .route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

    module.exports = router;