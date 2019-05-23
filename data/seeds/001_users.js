const bcrypt = require('bcryptjs');
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Nick',
          password: bcrypt.hashSync('password', 14)
        },
        {
          id: 2,
          username: 'Reginald',
          password: bcrypt.hashSync('goodboi', 14)
        },
        {
          id: 3,
          username: 'onMy',
          password: bcrypt.hashSync('own', 14)
        },
      ]);
    });
};
