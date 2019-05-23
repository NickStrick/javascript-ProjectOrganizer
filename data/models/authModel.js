const db = require('../dbConfig.js');

module.exports = {
    get,
    add,
    login,
    remove,
}

function get(id) {
    let query = db('users').select('id', 'username', 'password');

    if (id) {
        return query
            .where('id', id)
            .first()
    }

    return query;
}

function login(username) {
    let query = db('users').select('username', 'id', 'password');

    return query
        .where('username', username)
        .first()
}

function add(user) {
    user = { ...user }
    console.log(user)
    return db('users')
        .insert(user);
}

function remove(id) {
    return db('users')
        .delete(id);
}