const knex = require('../config/database');

const selectIn = knex('users')
  .whereIn('id', [10, 40, 60, 80])
  .orWhereIn('id', [100])
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
