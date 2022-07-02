import { useRouter } from 'next/router';

import { Layout } from '../../components/exports';
import data from '../../utility/data/data';

const Product = () => {
	const { query } = useRouter();
	const { slug } = query;
	// const product = data.products.find((product: any) => product.slug === slug);
	// if (!product)
	// 	return (
	// 		<div>
	// 			<h1>Product not found</h1>
	// 		</div>
	// 	);
	return <Layout>{slug}</Layout>;
};

export default Product;
