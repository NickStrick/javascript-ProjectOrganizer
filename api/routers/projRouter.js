const express = require('express');
const router = express.Router();

module.exports = router;

const db = require('../../data/models/projectModel.js');
const ware = require('../middleware.js');

router.route('/')
    .get(get)
    // .post(add)
    ;

router.route('/:id')
    .get(getId)
    .delete(remove)
    ;

function get(req, res) {
    db.get()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => res.status(500).json({ msg: 'cant find table', err }));
}

function getId(req, res) {
    const id = req.params.id;

    db.get()
        .then(projects => {
            let found = false;
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].id == id) {
                    found = true;
                    break;
                }
            }
            if (found) {
                db.get(id)
                    .then(result => {
                        res.status(200).json(result);
                    })
                    .catch(err => res.status(500).json({ msg: 'name must be unique', err }));
            } else {
                res.status(404).json({ msg: 'school with id not found' });
            }
        })
}

function remove(req, res) {
    const id = req.params.id;

    db.get()
        .then(projects => {
            let found = false;
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].id == id) {
                    found = true;
                    break;
                }
            }
            if (found) {
                db.remove(id)
                    .then(result => {
                        res.status(200).json({ deleted: (!!result) });
                    })
                    .catch(err => res.status(400).json({ msg: 'id not found', err }))
            } else {
                res.status(404).json({ msg: 'school with id not found' });
            }
        })
        .catch(err => {
            res.status(400).json({ err, msg: "failed to get projects array" })
        })
}