const knex = require('../config/database');

const knexGroupBy = knex('users')
  .select('first_name')
  .count('id as total')
  .groupBy('first_name');

console.log(knexGroupBy.toString());

knexGroupBy
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

