const knex = require('../config/database');

const knexUpdateJoin = knex('users as u')
  .join('profiles as p', 'u.id', 'p.user_id')
  .update({
    'p.bio': knex.raw('concat(p.bio, " ATUALIZADO")')
  })
  .where('u.first_name', '=', 'Maria');

console.log(knexUpdateJoin.toString());

knexUpdateJoin
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

