import React, { useEffect, useState } from 'react';
import { Book, BookCollection } from '@prisma/client';
import { AxiosError, AxiosResponse } from 'axios';
import { Grid } from '@mui/material';
import { Container, Section } from '../styles/pages/collection';
import CollectionCard from '../src/components/CollectionCard';
import bookCaseApi, { getAllBookCollections } from '../src/services/bookCaseApi';
import Link from 'next/link';

const Collection: React.FC = () => {
    const [collections, setCollections] = useState<BookCollection[]>();
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const loadCollections = async () => {
        const response = await getAllBookCollections();

        if (response instanceof AxiosError) {
            setErrorMessage(response.message);
        } else {
            setCollections(response);
        }
    }

    useEffect(() => {
        loadCollections();
    }, []);

    return (
        <Container>
            <Section>

                <Grid container >
                    <Grid item xs={12} className='title'>
                        <h2>Mangás</h2>
                    </Grid>

                    <Grid container className='cards-container'>
                        {
                            collections && collections.map((collection, i) =>
                                <Link href={`/collection/${collection.id}`}>
                                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <CollectionCard collection={collection} />
                                    </Grid>
                                </Link>
                            )
                        }
                    </Grid>
                </Grid>
            </Section>

            {/* <Section>
                <Grid container >
                    <Grid item xs={12} className='title'>
                        <h2>Comics</h2>
                    </Grid>

                    <Grid container className='cards-container'>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <CollectionCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Section> */}
        </Container>
    );
}

export default Collection;