import { useState } from 'react';
import { useRouter } from 'next/router';

// ! MUI
import { Box, Breadcrumbs, Grid, Rating, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// ! Local
import { Layout } from '../../../components/exports';
import { products } from '../../../utility/data/products';
import { ProductSwiper } from '../../../components/swiper';

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
	const {
		name,
		description,
		gallery,
		type,
		rating,
		numReviews,
		reviews,
		specs: {
			color,
			storage,
			ram,
			screenSize,
			screenResolution,
			battery,
			camera,
			cpu,
			gpu,
		},
	} = product;
	const Breadcrumb = () => {
		return (
			<Box pt={2} pb={4}>
				<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />}>
					<Typography onClick={() => router.push('/')}>Home Page</Typography>
					<Typography onClick={() => router.push(`/products/${category}`)}>
						{category}
					</Typography>
					<Typography
						onClick={() => router.push(`/products/${category}/${slug}`)}
					>
						{name}
					</Typography>
				</Breadcrumbs>
			</Box>
		);
	};

	return (
		<Layout>
			<Breadcrumb />
			<Grid container spacing={6} maxWidth='lg'>
				<Grid item xs={12} sm={6}>
					<ProductSwiper images={gallery} name={name} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography fontSize={{ xs: 18, md: 22 }}>
						{name} {type}, {storage} GB Storage, {ram} GB Ram, {screenSize} Inch{' '}
						{screenResolution[0]} by {screenResolution[1]} Screen, {battery} mAh
						Battery, {camera} MP Camera, {cpu} CPU, {gpu} GPU, ({color})
					</Typography>
					<Box py={2} display='flex' alignItems={'center'} gap={1}>
						<Rating name='read-only' value={rating} readOnly />
						<Typography>({numReviews} ratings)</Typography>
						<Typography>{reviews.length} Reviews</Typography>
					</Box>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Product;
