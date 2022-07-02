import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Layout, SlidingProductList } from '../components/exports';
import { products } from '../utility/data/products';
import {
	addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../utility/firebase/firebase';

const Home: NextPage = () => {
	useEffect(() => {
		const getProducts = async () => {
			const categories = await getCategoriesAndDocuments();
			console.log(categories);
		};
		getProducts();
	}, []);
	return (
		<>
			<Layout title='Home Page'>
				<SlidingProductList title="Smartphones"/>
				<SlidingProductList title="Smartphones"/>
				<SlidingProductList title="Smartphones"/>
				<SlidingProductList title="Smartphones"/>
			</Layout>
		</>
	);
};

export default Home;
