import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Container from './styles';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Book, BookCollection } from '@prisma/client';

interface IBookCollectionWithBooks extends BookCollection {
    books: Book[]
}
interface ICollectionCardProps {
    collection: IBookCollectionWithBooks;
}

const CollectionCard: React.FC<ICollectionCardProps> = ({ collection }) => {
    let have = 0;
    let read = 0;

    collection.books.map(book => {
        book.have ? have++ : null;
        book.read ? read++ : null;
    });

    const renderIcon = (counterName: string, counterQtd: number) => {
        let icon: React.ReactElement;

        if (counterQtd === 0) {
            icon = <CloseIcon />;

        } else if (counterQtd === collection.totalVolumes) {
            icon = counterName === 'have' ? <DoneIcon /> : <DoneAllIcon />;

        } else {
            icon = counterName === 'have' ? <LibraryBooksIcon /> : <TrendingUpIcon />;
        }

        return icon;
    }

    return (
        <Container>
            <div className='image'>
                <div>
                    <img src={collection.coverImageUrl} />
                </div>
            </div>

            <div className='info'>
                <div className='title'>
                    <h3>{collection.name}</h3>
                </div>

                <div className='counters'>
                    <h5>{renderIcon('have', have)} TEM {have} DE {collection.totalVolumes}</h5>
                    <h5>{renderIcon('read', read)} LEU {read} DE {collection.totalVolumes}</h5>
                </div>
            </div>
        </Container >
    );
};

export default CollectionCard;