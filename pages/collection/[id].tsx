import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Book, BookCollection } from '@prisma/client';
import { AxiosError, AxiosResponse } from 'axios';
import { Grid, CircularProgress, Skeleton } from '@mui/material';
import { Container, Section } from '../../styles/pages/collection';
import CollectionCard from '../../src/components/CollectionCard';
import SkeletonCard from '../../src/components/SkeletonCard';
import BookCard from '../../src/components/BookCard';
import bookCaseApi, { getBookCollection, getBooksByCollection } from '../../src/services/bookCaseApi';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import { renderIcon } from '../../src/components/CollectionCard/helpers';

const ViewCollection: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const [books, setBooks] = useState<Book[]>();
    const [have, setHave] = useState<number>();
    const [read, setRead] = useState<number>();
    const [collection, setCollection] = useState<BookCollection>();
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const [collectionErrorMessage, setCollectionErrorMessage] = useState<string | undefined>();
    const [loading, setLoading] = useState(true);

    const loadBooks = async (collectionId: string) => {
        setLoading(true);

        const response = await getBooksByCollection(collectionId);

        if (response instanceof AxiosError) {
            setErrorMessage(response.message);
        } else {
            setBooks(response);
        }

        setLoading(false);
    };

    const loadCollection = async (id: string) => {
        setLoading(true);

        const response = await getBookCollection(id);

        if (response instanceof AxiosError) {
            setCollectionErrorMessage(response.message);
        } else {
            setCollection(response);
        }

        setLoading(false);
    };

    useEffect(() => {
        if (books) {
            loadCollection(books[0].bookCollectionId.toString());

            let newHave = 0;
            let newRead = 0;
            books.map(book => {
                book.have ? newHave++ : null;
                book.read ? newRead++ : null;

            });
            setHave(newHave);
            setRead(newRead);
        }
    }, [books]);

    useEffect(() => {
        if (id) {
            loadBooks(id as string);
        }
    }, [id]);

    const renderMessages = () => {
        let message;

        if (!loading && (!books || books.length === 0) && !errorMessage) {
            message = <p>Você ainda não possui nenhum item nessa coleção! Cadastre algum!</p>;
        }

        if (!loading && !books && errorMessage) {
            message = <div>
                <p>Houve um erro ao tentar acessar os itens dessa coleção. Por favor tente novamente mais tarde.</p>
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
                        {
                            collection ?
                                <>
                                    <h2>{collection.name}</h2>
                                    <div className='collection-status'>
                                        <p className={have === collection.totalVolumes ? 'done' : ''}>
                                            {renderIcon('have', (have || 0), collection.totalVolumes)} TEM {have} DE {collection.totalVolumes}
                                        </p>
                                        <p className={have === collection.totalVolumes ? 'done' : ''}>
                                            {renderIcon('read', (read || 0), collection.totalVolumes)} LEU {read} DE {collection.totalVolumes}
                                        </p>
                                    </div>
                                </>
                                : <Skeleton width={300} height={70} />
                        }
                    </Grid>

                    {
                        collectionErrorMessage &&
                        <div className='message'>
                            <div>
                                <p>Houve um erro ao tentar acessar os dados dessa coleção. Por favor tente novamente mais tarde.</p>
                                <p className='error'>Erro: {collectionErrorMessage}</p>
                            </div>
                        </div>
                    }
                    {
                        renderMessages()
                    }

                    <Grid container maxWidth='xl' spacing={5} className='cards-container' >
                        {
                            loading && !books &&
                            <>
                                {
                                    [1, 2, 3, 4].map(x =>
                                        <Grid key={x} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                                            <SkeletonCard counterNumber={3} />
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
                            books && books.map((book, i) =>
                                // <Link key={i} href={`/collection/${id}/${book.id}`}>
                                <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                                    <BookCard book={book} />
                                </Grid>
                                // </Link>
                            )
                        }
                    </Grid>
                </Grid>
            </Section>
        </Container>
    );
}

export default ViewCollection;