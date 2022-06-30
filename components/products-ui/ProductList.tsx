import { FC, useEffect } from 'react';
import { Grid } from '@mui/material';

import data from '../../utility/data/data';
import ProductItem from './ProductItem';
import { phones } from '../../utility/data/products';

import { addCollectionAndDocuments } from '../../utility/firebase/firebase';

const ProductList: FC = () => {

	return <Grid container spacing={2}>
	</Grid>;
};

export default ProductList;
