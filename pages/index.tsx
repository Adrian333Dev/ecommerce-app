import type { NextPage } from 'next';
import { Layout, ProductList, SlidingProductList } from '../components/exports';

const Home: NextPage = () => {
	return (
		<>
			<Layout title='Home Page'>
				<SlidingProductList />
			</Layout>
		</>
	);
};

export default Home;
