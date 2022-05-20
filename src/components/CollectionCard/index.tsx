import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Container from './styles';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { BookCollection } from '@prisma/client';

interface ICollectionCardProps {
    collection: BookCollection;
}

const CollectionCard: React.FC<ICollectionCardProps> = ({ collection }) => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} className='image'>
                    <div>
                        <img src={collection.coverImageUrl} />
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className='info'>
                        <div className='title'>
                            <h3>{collection.name}</h3>
                        </div>

                        <div className='counters'>
                            <h5><LibraryBooksIcon /> TEM 18 DE {collection.totalVolumes}</h5>
                            <h5><TrendingUpIcon /> LEU 5 DE {collection.totalVolumes}</h5>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container >
    );
};

export default CollectionCard;