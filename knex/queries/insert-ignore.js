const knex = require('../config/database');

const knexInsertUsersRolesIgnore = knex(
  knex.raw('users_roles (user_id, role_id)')
).insert(function() {
  this.from('users').select(
    knex.raw('id'),
    knex.raw('(select id from roles order by rand() limit 1) as qualquer')
  );
});;

const insertIgnore = knex.raw(knexInsertUsersRolesIgnore.toString().replace('insert', 'insert ignore'));

console.log(insertIgnore.toString());

insertIgnore
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
