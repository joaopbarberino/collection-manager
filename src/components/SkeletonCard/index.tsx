import React from 'react';
import Container from './styles';
import { Skeleton } from '@mui/material';

const SkeletonCard: React.FC = () => {
    return (
        <Container>
            <div className='image'>
                <Skeleton />
            </div>

            <div className='info'>
                <div className='title'>
                    <Skeleton><h3>My Hero Academia</h3></Skeleton>
                </div>

                <div className='counters'>
                    <Skeleton height='18px' />
                    <Skeleton height='18px' />
                </div>
            </div>
        </Container >
    );
};

export default SkeletonCard;