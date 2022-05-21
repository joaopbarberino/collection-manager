import { NextApiRequest, NextApiResponse } from 'next';
import { BookCollection } from '@prisma/client';
import prisma from '../../lib/prisma';

interface IBookCollection {
    bookCollections: BookCollection[];
    error?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<IBookCollection>) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const bookCollections = await prisma.bookCollection.findMany({ include: { books: { select: { have: true, read: true } } } });
                res.status(200).json({ bookCollections });

            } catch (e) {
                console.error('Request error', e);
                res.status(500).json({ bookCollections: [], error: 'Error fetching bookCollections' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
};

export default handler;