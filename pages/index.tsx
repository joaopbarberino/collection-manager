import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../styles/pages/home';
import LinkIcon from '@mui/icons-material/Link';

const Home: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>Home</title>
			</Head>

			<div className='info'>
				<p>Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.</p>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.amazon.com.br/b?_encoding=UTF8&tag=collectionman-20&linkCode=ur2&linkId=b6539a615aaec10360f8b80efae810c5&camp=1789&creative=9325&node=7842710011'>
					<LinkIcon />
					Mangás e HQs mais vendidos!!!
				</a>
			</div>

			<div className='info'>
				<div>
					Bem-vindo ao My Bookcase, um app para organizar sua coleção de comics e mangás!
					Ainda em desenvolvimento, quando pronto você poderá:
					<ul>
						<li>Pesquisar, registrar e separar por coleções os seus volumes;</li>
						<li>Marcar quais volumes foram lidos;</li>
						<li>Checar o preço de capa na Amazon e anotar o quanto você pagou para manter noção de gastos;</li>
						<li>Organizar uma lista de desejos para definir suas próximas compras!</li>
					</ul>
				</div>
			</div>


		</Container>
	);
};

export default Home;
