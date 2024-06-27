const knex = require('../config/database');

const knexLeftJoin = knex('users as u')
  .select('u.id as uid',
    'p.id as pid',
    'p.bio as bio',
    'u.first_name as first_name'
  )
  .rightJoin('profiles as p', 'u.id', 'p.id');

console.log(knexLeftJoin.toString());

knexLeftJoin
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
