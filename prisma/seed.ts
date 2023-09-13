import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.knowledge.createMany({
    data: [
      {
        name: 'Git',
      },
      {
        name: 'React',
      },
      {
        name: 'PHP',
      },
      {
        name: 'NodeJS',
      },
      {
        name: 'DevOps',
      },
      {
        name: 'Banco de Dados',
      },
      {
        name: 'TypeScript',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
