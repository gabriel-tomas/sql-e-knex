const knex = require('../config/database');

const insertSelect = knex(
  knex.raw(
    '?? (??, ??)',
    ['profiles', 'bio', 'user_id']
  )
).insert(function() {
  this.from('users').select(
    knex.raw(
      'concat("Bio de ", ??)',
      ['first_name']
    ),
    'id'
  );
});

console.log(insertSelect.toString());

insertSelect
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());

const test = knex('users').insert({
  first_name: 'delete from users',
  email: 'test@test.com',
  password_hash: 'test',
  salary: 1000,
})

/* console.log(test.toString()); */
