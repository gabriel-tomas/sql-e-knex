const knex = require('../config/database');

const selectOrder = knex('users')
  .orderBy('id', 'desc')
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
