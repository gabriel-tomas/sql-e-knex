const knex = require('../config/database');

const knexUpdateRandRound = knex('users').update({
  salary: knex.raw('round(rand() * 10000, 2)')
});

console.log(knexUpdateRandRound.toString());

knexUpdateRandRound
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
