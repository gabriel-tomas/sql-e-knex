const knex = require('../config/database');

const knexVariasTables = knex(
    knex.raw('users as u, profiles as p')
  ).select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
  .where('u.id', '=', 
    knex.raw('p.id')
  );


console.log(knexVariasTables.toString());

knexVariasTables
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

