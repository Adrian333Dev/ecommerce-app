import { FC } from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';

import { Navbar, Footer } from '../exports';

const Layout: FC<any> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title ? title + ' - Cyper Pro' : 'Cyper Pro'}</title>
				<meta name='description' content='Ecommerce app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Container
				sx={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '2rem' }}
			>
				{children}
			</Container>
			<Footer />
		</>
	);
};

export default Layout;
