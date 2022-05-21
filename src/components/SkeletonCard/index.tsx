import React from 'react';
import Container from './styles';
import { Skeleton } from '@mui/material';

interface ISkeletonCardProps {
    counterNumber: number;
}

const SkeletonCard: React.FC<ISkeletonCardProps> = ({ counterNumber }) => {
    return (
        <Container>
            <div className='image'>
                <Skeleton />
            </div>

            <div className='info'>
                <div className='card-title'>
                    <Skeleton><h3>My Hero Academia</h3></Skeleton>
                </div>

                <div className='counters'>
                    {Array.from(Array(counterNumber).keys()).map((x, i) =>
                        <Skeleton key={i} height='18px' />
                    )}
                </div>
            </div>
        </Container >
    );
};

export default SkeletonCard;