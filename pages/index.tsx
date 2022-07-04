import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Layout, SlidingProductList } from '../components/exports';
import { products } from '../utility/data/products';
import {
	addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../utility/firebase/firebase';

import {
	phones,
	tablets,
	headphones,
	laptops,
	watches,
} from '../utility/data/products';

const Home: NextPage = () => {
	useEffect(() => {
		const getProducts = async () => {
			const categories = await getCategoriesAndDocuments();
		};
		getProducts();
	}, []);
	return (
		<>
			<Layout title='Home Page'>
				<SlidingProductList products={phones} title='Smartphones' />
				<SlidingProductList products={tablets} title='Tablets' />
				<SlidingProductList products={headphones} title='Headphones' />
				<SlidingProductList products={laptops} title='Laptops' />
				<SlidingProductList products={watches} title='Watches' />
			</Layout>
		</>
	);
};

export default Home;
