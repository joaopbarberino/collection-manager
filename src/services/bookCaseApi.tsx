import axios, { AxiosError } from 'axios';
import { BookCollection, Book } from '@prisma/client';

const bookCaseApi = axios.create({
    baseURL: '/api/',
});

export const getAllBookCollections = () =>
    bookCaseApi
        .get<{ bookCollections: BookCollection[] }>('/bookCollection')
        .then(response => response.data.bookCollections)
        .catch((e: AxiosError) => { console.error(e); return e });

export const getBooksByCollection = (collectionId: string) =>
    bookCaseApi
        .get<{ books: Book[] }>('/book', { params: { 'collectionId': collectionId } })
        .then(response => response.data.books)
        .catch((e: AxiosError) => { console.error(e); return e });

export default bookCaseApi;