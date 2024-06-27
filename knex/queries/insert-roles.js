const knex = require('../config/database');

const knexInsertRoles = knex('roles').insert([
  { name: 'GET' },
  { name: 'POST' },
  { name: 'PUT' },
  { name: 'DELETE' }
]);

console.log(knexInsertRoles.toString());

knexInsertRoles
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
