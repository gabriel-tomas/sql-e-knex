const knex = require('../config/database');

const data = [
  {
    first_name: 'Maria',
    last_name: 'Tomás',
    email: 'email2@email',
    password_hash: 'hash2',
    salary: 1000,
  },
  {
    first_name: 'Gabriel',
    last_name: 'Tomás',
    email: 'gabriel0@email.com',
    password_hash: 'hash3',
    salary: 99999,
  },
  {
    first_name: 'João',
    last_name: 'Gomes',
    email: 'joao@a.com',
    password_hash: 'hash4',
    salary: 10000000,
  }
];

const insert = knex('users')
  .insert(data)
  .then(res => console.log(res));