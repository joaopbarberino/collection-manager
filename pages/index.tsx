import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../styles/pages/home';
import LinkIcon from '@mui/icons-material/Link';

const items = [
	{
		imgLink: 'https://m.media-amazon.com/images/I/615zyWvf9tL._SX619_BO1,204,203,200_.jpg',
		link: 'https://amzn.to/3UeiBHN',
		text: `Jojo's Bizarre Adventure - 08: Parte 04: Diamond is Unbreakable`,
	},
	{
		imgLink: 'https://m.media-amazon.com/images/I/81dqqxkgMuL.jpg',
		link: 'https://amzn.to/3GU0nIH',
		text: `Heartstopper: De mãos dadas (vol. 4): Inspiração para a série da Netflix`,
	},
	{
		imgLink: 'https://m.media-amazon.com/images/I/51k3uqUud-L._SX354_BO1,204,203,200_.jpg',
		link: 'https://amzn.to/3OH87Q4',
		text: `Nausicaä do Vale do Vento - Vol. 01`,
	},
	{
		imgLink: 'https://m.media-amazon.com/images/I/712b+ZS2B0L._SX613_BO1,204,203,200_.jpg',
		link: 'https://amzn.to/3FaSGws',
		text: `Alma - 01`,
	},
	{
		imgLink: 'https://m.media-amazon.com/images/I/61W5DxY1xkL._SX578_BO1,204,203,200_.jpg',
		link: 'https://amzn.to/3VqkDWi',
		text: `Alma - 02`,
	},
	{
		imgLink: 'https://m.media-amazon.com/images/I/61pElhi5lsL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
		link: 'https://amzn.to/3uaWlEe',
		text: `Chainsaw Man Vol. 10`,
	},
	{
		imgLink: 'https://m.media-amazon.com/images/I/61hO2nz2gnL._SX605_BO1,204,203,200_.jpg',
		link: 'https://amzn.to/3F6P6TT',
		text: `Dorohedoro - 11`,
	},

];

const Home: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>Home</title>
			</Head>

			<div className='info'>
				<div>
					Bem-vindo ao My Bookcase, um app para organizar sua coleção de comics e mangás!
					Ainda em desenvolvimento, quando pronto você poderá:
					<ul>
						<li>Pesquisar, registrar e separar por coleções os seus volumes;</li>
						<li>Marcar quais volumes foram lidos;</li>
						<li>Checar o preço de capa na Amazon e anotar o quanto você pagou, lá ou em outro lugar, para manter noção de gastos;</li>
						<li>Organizar uma lista de desejos para definir suas próximas compras!</li>
					</ul>
				</div>
			</div>

			<div className='info'>
				<p>Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.</p>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://amzn.to/3EKdSI4'>
					<LinkIcon />
					Mais Vendidos em HQs, Mangás e Graphic Novels
				</a>

				<p>Alguns produtos legais na Amazon que podem ser do seu interesse!</p>
				{
					items.map(item =>
						<div className='item' key={item.link}>
							<div>
								<img src={item.imgLink} />
							</div>
							<div>
								<p>
									{item.text} na Amazon
									<br />
									Link:
								</p>
								<a
									href={item.link}
									target='_blank'
									rel='noreferrer'
								>
									{item.link}
								</a>
							</div>
						</div>
					)
				}
			</div>


		</Container>
	);
};

export default Home;
