import type { NextPage } from 'next';
import { Layout, ProductList } from '../components/exports';

const Home: NextPage = () => {
	return (
		<>
			<Layout title='Home Page'>
				<ProductList />
			</Layout>
		</>
	);
};

export default Home;
