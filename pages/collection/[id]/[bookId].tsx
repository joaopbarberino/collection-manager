import React, { useEffect, useState } from 'react';
import { Book, BookCollection } from '@prisma/client';
import { AxiosError, AxiosResponse } from 'axios';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';

const Collection: React.FC = () => {
    const router = useRouter();
    const { bookId } = router.query;
    console.log(router.query);
    console.log(bookId);

    return (
        <div>oi</div>
    );
}

export default Collection;