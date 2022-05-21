import React from 'react';
import Image from 'next/image';
import { Book, BookCollection } from '@prisma/client';
import { renderIcon } from './helpers';
import Container from './styles';

interface IBookCollectionWithBooks extends BookCollection {
    books: Book[]
}
interface ICollectionCardProps {
    collection: BookCollection;
}

const CollectionCard: React.FC<ICollectionCardProps> = props => {
    const collection = props.collection as IBookCollectionWithBooks;
    const { name, coverImageUrl, books, totalVolumes } = collection;

    let have = 0;
    let read = 0;

    books.map(book => {
        book.have ? have++ : null;
        book.read ? read++ : null;
    });

    return (
        <Container>
            <div className='image'>
                <div>
                    <img src={coverImageUrl} />
                </div>
            </div>

            <div className='info'>
                <div className='card-title'>
                    <h3>{name}</h3>
                </div>

                <div className='counters'>
                    <h5>{renderIcon('have', have, totalVolumes)} TEM {have} DE {totalVolumes}</h5>
                    <h5>{renderIcon('read', read, totalVolumes)} LEU {read} DE {totalVolumes}</h5>
                </div>
            </div>
        </Container >
    );
};

export default CollectionCard;