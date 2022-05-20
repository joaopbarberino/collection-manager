import React, { useEffect, useState } from 'react';
import { Book, BookCollection } from '@prisma/client';
import { AxiosError, AxiosResponse } from 'axios';
import { Grid } from '@mui/material';
import { Container, Section } from '../../styles/pages/collection';
import CollectionCard from '../../src/components/CollectionCard';
import bookCaseApi, { getBooksByCollection } from '../../src/services/bookCaseApi';
import { useRouter } from 'next/router';

const Collection: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(router.query);
    console.log(id);

    const [books, setCollections] = useState<Book[]>();
    const [errorMessage, setErrorMessage] = useState<string | undefined>();


    const loadCollection = async () => {
        if (!id) return;

        const response = await getBooksByCollection(id as string);

        if (response instanceof AxiosError) {
            setErrorMessage(response.message);
        } else {
            setCollections(response);
        }
    }

    useEffect(() => {
        if (id) {
            loadCollection();
        }
    }, [id]);

    return (
        <Container>
            <Section>
                <Grid container >
                    <Grid item xs={12} className='title'>
                        <h2>Volumes</h2>
                    </Grid>

                    <Grid container className='cards-container'>
                        <ul style={{ width: '100%' }}>
                            {
                                books && books.map((book, i) =>
                                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <li>{book.name}</li>
                                    </Grid>
                                )
                            }
                        </ul>
                    </Grid>
                </Grid>
            </Section>
        </Container>
    );
}

export default Collection;