const { User } = require('../models');

const userData = [
  {
    username: 'billie',
    email: 'billie@gmail.com',
    password: 'test1',
  },
  {
    username: 'elke',
    email: 'elke@gmail.com',
    password: 'test2',
  },
  {
    username: 'xavier',
    email: 'xavier@gmail.com',
    password: 'test3',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;