import { PrismaClient } from '@prisma/client';
import { BookCollection, Book } from './data.mjs';

const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.book.deleteMany();
        console.log('Deleted records in Book table');

        await prisma.bookCollection.deleteMany();
        console.log('Deleted records in BookCollection table');

        await prisma.$queryRaw`ALTER TABLE Book AUTO_INCREMENT = 1`;
        console.log('Reseted Book auto increment to 1');

        await prisma.$queryRaw`ALTER TABLE BookCollection AUTO_INCREMENT = 1`;
        console.log('Reset BookCollection auto increment to 1');

        await prisma.bookCollection.createMany({
            data: BookCollection,
        });
        console.log('Added BookCollection data');

        await prisma.book.createMany({
            data: Book,
        });
        console.log('Added Book data');
        console.log('Finished seeding!-----------');

    } catch (e) {
        console.log('Error!-----------');
        console.error(e);
        process.exit(1);

    } finally {
        await prisma.$disconnect();
    }
};

load();