exports.seed = function (knex, Promise) {
  const projects = [
    {
      name: "Make Camping Great Again",
      description: "A camping like never before",
      value: 1000,
      img_url: "www.camping.com/camp.jpg",
      user_id: 3
    },
    {
      name: "Save the ocean",
      description: "Ocean is dying we need to save it",
      value: 500,
      img_url: "www.sea.com/fish.jpg",
      user_id: 2
    },
    {
      name: "abc",
      description: "test",
      value: 100,
      img_url: "url",
      user_id: 1
    }
  ]

  return (
    knex
      // Deletes ALL existing entries for users table
      .raw("TRUNCATE TABLE projects RESTART IDENTITY CASCADE")
      .then(function () {
        return knex("projects").insert(projects);
      })
  );
};