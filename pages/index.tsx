import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Section } from '../styles/pages/home';
import Menu from '../src/components/Menu';
import { Grid } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import CollectionCard from '../src/components/CollectionCard';
import apiMangaDex from '../src/services/apiMangaDex';
import googleBooksApi from '../src/services/googleBooksApi';
import axios from 'axios';

const Home: NextPage = () => {
	console.log()

	useEffect(() => {
		// googleBooksApi.get('/volumes?q=isbn:9781974728992&API_KEY=AIzaSyBEMhruQxriRCOvECoLKppZ7TJGQrMXGyA', {
		// params: {
		// 	q: 'isbn:9786559605392',9781974727100
		// 	maxResults: 30,
		// }
		// }).then(response => console.log(response));

	}, []);

	return (
		<Container>
			<Head>
				<title>Home</title>
			</Head>
			<Menu />

			<div className='info amazon-link'>
				<p>Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.</p>
				<a target="_blank" href="https://www.amazon.com.br/b?_encoding=UTF8&tag=collectionman-20&linkCode=ur2&linkId=b6539a615aaec10360f8b80efae810c5&camp=1789&creative=9325&node=7842710011"><LinkIcon />Mangás e HQs mais vendidos!!!</a>
			</div>

			<div className='info'>
				<p>
					Bem-vindo ao My Bookcase, um app para organizar sua coleção de comics e mangás!
					Ainda em desenvolvimento, quando pronto você poderá:
					<ul>
						<li>Pesquisar, registrar e separar por coleções os seus volumes;</li>
						<li>Marcar quais volumes foram lidos;</li>
						<li>Checar o preço de capa na Amazon e anotar o quanto você pagou para manter noção de gastos;</li>
						<li>Organizar uma lista de desejos para definir suas próximas compras!</li>
					</ul>
				</p>
			</div>


		</Container>
	);
};

export default Home;
