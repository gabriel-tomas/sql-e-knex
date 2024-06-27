const knex = require('../config/database');

const selectBetween = knex('users')
  .whereBetween('id', [50, 60])
  .andWhereBetween('salary', [280000, 300000])
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
