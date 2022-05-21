import { NextApiRequest, NextApiResponse, } from 'next';
import { BookCollection } from '@prisma/client';
import prisma from '../../../lib/prisma';

interface IBookCollectionResponse {
    bookCollection: BookCollection | null;
    error?: string;
}

interface IQueryParams {
    id: string;
    [key: string]: string | string[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse<IBookCollectionResponse>) => {
    const { method } = req;
    const { id } = req.query as IQueryParams;

    switch (method) {
        case 'GET':
            try {
                const bookCollection = await prisma.bookCollection.findUnique({ where: { id: parseInt(id) } });
                res.status(200).json({ bookCollection });

            } catch (e) {
                console.error('Request error', e);
                res.status(500).json({ bookCollection: null, error: 'Error fetching bookCollections/id' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
};

export default handler;