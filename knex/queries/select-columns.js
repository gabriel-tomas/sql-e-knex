const knex = require('../config/database');

const select = knex('users as u').select('id as uid', 'email as uemail')
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
