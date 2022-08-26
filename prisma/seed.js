const { PrismaClient } = require('@prisma/client');
const { players } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.players.deleteMany();
    console.log('Deleted records in players table');

    await prisma.$queryRaw`ALTER TABLE players AUTO_INCREMENT = 1`;
    console.log('reset players auto increment to 1');


    await prisma.players.createMany({
      data: players,
    });
    console.log('Added players data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
