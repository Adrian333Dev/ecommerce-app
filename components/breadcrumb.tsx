import { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumb: FC<any> = ({ category, slug, name }) => {
	const router = useRouter();
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

export default Breadcrumb;
