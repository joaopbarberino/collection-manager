import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Section } from '../styles/home';
import Menu from '../src/components/Menu';
import { Grid } from '@mui/material';
import CollectionCard from '../src/components/CollectionCard';

const Home: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>Home</title>
			</Head>
			<Menu />

			<Section>
				<Grid container >
					<Grid item xs={12} className='title'>
						<h2>Mangas</h2>
					</Grid>

					<Grid container className='cards-container'>
						<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
							<CollectionCard manga />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
							<CollectionCard manga />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
							<CollectionCard manga />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
							<CollectionCard manga />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
							<CollectionCard manga />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
							<CollectionCard manga />
						</Grid>
					</Grid>
				</Grid>
			</Section>

			<Section>
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
			</Section>
		</Container>
	);
};

export default Home;
