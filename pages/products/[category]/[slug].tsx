import { useState } from 'react';
import { useRouter } from 'next/router';

// ! MUI
import { Box, Grid, Rating, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// ! Local
import {
	Layout,
	ProductDetails,
	ProductSwiper,
	Breadcrumb,
} from '../../../components/exports';
import { products } from '../../../utility/data/products';

const Product = () => {
	const router = useRouter();
	const { category, slug } = router.query;
	const product = products
		.map((prod) => prod.items)
		.flat()
		.find((prod) => prod.slug === slug);

	if (!product)
		return (
			<div>
				<h1>Product not found</h1>
			</div>
		);
	const { name, gallery } = product;

	return (
		<Layout>
			<Breadcrumb category={category} slug={slug} name={name} />
			<Grid container spacing={6} maxWidth='lg'>
				<Grid item xs={12} sm={6}>
					<ProductSwiper images={gallery} name={name} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<ProductDetails product={product} />
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Product;
