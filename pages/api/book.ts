import { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '@prisma/client';
import prisma from '../../lib/prisma';

interface IBookResponse {
    books: Book[];
    error?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<IBookResponse>) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const books = await prisma.book.findMany();
                res.status(200).json({ books });

            } catch (e) {
                console.error('Request error', e);
                res.status(500).json({ books: [], error: 'Error fetching books' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
};

export default handler;