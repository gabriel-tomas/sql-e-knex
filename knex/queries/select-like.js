const knex = require('../config/database');

const selectLike = knex('users')
  .where('first_name', 'like', '%a')
  .andWhere('created_at', '>=', '2022-08-27T00:00:00.000Z')
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
