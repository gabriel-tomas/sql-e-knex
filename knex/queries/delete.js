const knex = require('../config/database');

const knexDelete = knex('users').delete().whereBetween('id', [40, 45]);

console.log(knexDelete.toString());

knexDelete
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

