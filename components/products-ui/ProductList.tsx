import { FC } from 'react';
import { Grid } from '@mui/material';

import data from '../../utility/data/data';
import ProductItem from './ProductItem';
import { phones } from '../../utility/data/products';

const ProductList: FC = () => {

	return (
		<Grid container spacing={2}>
			{/* {data.products.map((prod: any, i: number) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					key={i}
					sx={{ display: 'flex' }}
				>
					<ProductItem prod={prod} />
				</Grid>
			))} */}
		</Grid>
	);
};

export default ProductList;
