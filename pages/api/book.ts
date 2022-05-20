import { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '@prisma/client';
import prisma from '../../lib/prisma';

interface IBookResponse {
    books: Book[];
    error?: string;
}

interface IQueryParams {
    collectionId: string;
    [key: string]: string | string[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse<IBookResponse>) => {
    const { method } = req;
    const { collectionId } = req.query as IQueryParams;

    switch (method) {
        case 'GET':
            try {
                let books: Book[];

                if (collectionId) {
                    books = await prisma.book.findMany({ where: { bookCollectionId: parseInt(collectionId) } })
                } else {
                    books = await prisma.book.findMany();
                }

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