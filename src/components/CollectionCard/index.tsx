import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Container from './styles';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface ICollectionCardProps {
    manga?: boolean;
}

const CollectionCard: React.FC<ICollectionCardProps> = ({ manga }) => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} className='image'>
                    <div>
                        {
                            manga ?
                                <img src='/img/manga.jpg' /> :
                                <img src='/img/comic.png' />
                        }
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className='info'>
                        <div className='title'>
                            <h3>Demon Slayer - Kimetsu no Yaiba</h3>
                        </div>

                        <div className='counters'>
                            <h5><LibraryBooksIcon /> HAVE 18/23</h5>
                            <h5><TrendingUpIcon /> READ 5/23</h5>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container >
    );
};

export default CollectionCard;