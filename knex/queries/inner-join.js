const knex = require('../config/database');

const knexInnerJoin = knex('users as u')
  .select('u.id as uid',
    'p.id as pid',
    'p.bio as bio',
    'u.first_name as first_name'
  )
  .innerJoin('profiles as p', 'u.id', 'p.id')
  .where('u.first_name', 'like', '%a')
  .andWhere('u.id', '>', 93)
  .orderBy('u.first_name', 'desc')
  .limit(5);

console.log(knexInnerJoin.toString());

knexInnerJoin
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

