const knex = require('../config/database');

const knexFuncsAgregacao = knex('users')
  .max('salary as maxSalary')
  .min('salary as minSalary')
  .avg('salary as avgSalary')
  .sum('salary as totalSalary')
  .count('salary as countSalary');

console.log(knexFuncsAgregacao.toString());

knexFuncsAgregacao
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

