const knex = require('../config/database');

const knexUpdate = knex('users').update({
  first_name: 'GABRIEL',
  last_name: 'TOMÁS',
  email: 'GABRIEL123@email.com',
  password_hash: 'NEW_HASH',
  salary: 10000000,
  updated_at: knex.fn.now()
}).where({ id: 59 });

console.log(knexUpdate.toString());

knexUpdate
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

