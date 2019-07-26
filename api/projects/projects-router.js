const router = require('express').Router();

const dreamsModel = require('./projects-model');

module.exports = router;

router.get('/', get);
router.get('/:id', get);
router.post('/', add);

function get(req, res) {  //fetches dream by dream id
    const id = req.params.id;
    dreamsModel.get(id)
        .then(dream => {
            res.status(200).json(dream)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

function add(req, res) { //adds dream to list of dream
    let { name, description } = req.body // checks to make sure name and both descriptions are added
    if (!name || !description) {
        return res
            .status(400)
            .json({ message: 'Please Fill Out All Required Fields' })
    }
    dreamsModel.add(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

