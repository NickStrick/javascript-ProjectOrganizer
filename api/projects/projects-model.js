const db = require('../../data/dbConfig');

module.exports = {
    add,
    get
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

function add(project) {
    return db('projects')
        .insert(project, 'id')
}

