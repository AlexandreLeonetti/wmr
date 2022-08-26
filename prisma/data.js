const { Prisma } = require('@prisma/client');


const players = [
  {
    username: 'Alex',
    email: '',
    password: '',
    country: 'fr',
    level: 1,
  },
  {
    username: 'AL',
    email: '',
    password: '',
    country: 'it',
    level: 1,
 },
 {
    username: 'Alexandre Leonetti',
    email: '',
    password:'' ,
    country: 'jp',
    level: 1,
  },
  {
    username: 'GodSpeed',
    email: '',
    password:'' ,
    country: 'us',
    level: 9,
 },
];


module.exports = {
  players,
};
