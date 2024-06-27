const knex = require('../config/database');

const select = knex('users').where('id', '=', 5).orWhere('id', '=', '4').andWhere('salary', '>=', '1500')
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
