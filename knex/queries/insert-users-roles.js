const knex = require('../config/database');

const knexInsertUsersRoles = knex(
  knex.raw('users_roles (user_id, role_id)')
).insert(function() {
  this.from('users').select(
    knex.raw('id'),
    knex.raw('(select id from roles order by rand() limit 1) as qualquer')
  );
});;

console.log(knexInsertUsersRoles.toString());

knexInsertUsersRoles
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
