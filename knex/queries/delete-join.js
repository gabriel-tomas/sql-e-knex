const knex = require('../config/database');

const knexDeleteJoin = knex.raw(`
  delete p, u from users u
  inner join profiles as p
  on p.user_id = u.id
  where u.first_name = 'Maria'
`);

console.log(knexDeleteJoin.toString());

knexDeleteJoin
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

