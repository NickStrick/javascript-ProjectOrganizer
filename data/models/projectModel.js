const db = require('../dbConfig.js');

module.exports = {
    get,
    add,
    remove,
}

function get(id) {
    let query = db('projects');

    if (id) {
        return query
            .where('id', id)
            .first()
    }

    return query;
}

function add(school) {
    console.log(school)
    return db('projects')
        .insert(school)
        .then(([id]) => ({ id }));
}

function remove(id) {
    return db('projects')
        .where('id', id)
        .del();
}