import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Book, BookCollection } from '@prisma/client';
import { AxiosError, AxiosResponse } from 'axios';
import { CircularProgress, Collapse, Grid, Skeleton } from '@mui/material';
import { Container, Section } from '../styles/pages/collection';
import CollectionCard from '../src/components/CollectionCard';
import SkeletonCard from '../src/components/SkeletonCard';
import bookCaseApi, { getAllBookCollections } from '../src/services/bookCaseApi';

const Collection: React.FC = () => {
    const [collections, setCollections] = useState<BookCollection[]>();
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const loadCollections = async () => {
        setLoading(true);
        const response = await getAllBookCollections();

        if (response instanceof AxiosError) {
            setErrorMessage(response.message);
        } else {
            setCollections(response);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadCollections();
    }, []);

    const renderMessages = () => {
        let message;

        if (!loading && (!collections || collections.length === 0) && !errorMessage) {
            message = <p>Você ainda não possui nenhuma coleção! Cadastre alguma!</p>;
        }

        if (!loading && !collections && errorMessage) {
            message = <div>
                <p>Houve um erro ao tentar acessar suas coleções por favor tente novamente mais tarde!</p>
                <p className='error'>Erro: {errorMessage}</p>
            </div>;
        }

        return message ? <div className='message'>{message}</div> : null;
    }

    return (
        <Container>
            <Section>

                <Grid container>
                    <Grid item xs={12} className='title'>
                        <h2>Mangás</h2>
                    </Grid>

                    <Grid container maxWidth='xl' spacing={5} className='cards-container' >
                        {
                            loading && !collections &&
                            <>
                                {
                                    [1, 2, 3, 4].map(x =>
                                        <Grid key={x} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                                            <SkeletonCard />
                                        </Grid>
                                    )
                                }
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                                    <div className='progress-container'>
                                        <CircularProgress />
                                    </div>
                                </Grid>
                            </>
                        }
                        {
                            renderMessages()
                        }
                        {
                            collections && collections.map((collection, i) =>
                                <Link key={i} href={`/collection/${collection.id}`}>
                                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
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