const knex = require('../config/database');

const selectLimitOffset = knex('users')
  .offset(10)
  .limit(5)
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
