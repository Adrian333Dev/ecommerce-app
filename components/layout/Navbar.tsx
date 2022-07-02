import { FC } from 'react';
import {
	AppBar,
	Box,
	Button,
	Slide,
	Toolbar,
	useScrollTrigger,
	IconButton,
	InputBase,
} from '@mui/material';

// ! ICONS
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useRouter } from 'next/router';
import { MainNav, SearchbarWrapper, SearchButton, SearchInput } from '../styled/navbar';

const categories = [
	'Smartphones',
	'Tablets',
	'Laptops',
	'Watches',
	'Headphones',
];

interface Props {
	children: React.ReactElement;
}

const HideOnScroll: FC<Props> = ({ children }) => {
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
};

export const CategoryNavbar: FC = () => {
	return (
		<Box>
			{categories.map((category: string, i: number) => {
				return <Button key={i}>{category}</Button>;
			})}
		</Box>
	);
};

export const MenuIcons: FC = () => {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
			<IconButton>
				<AccountCircleIcon />
			</IconButton>
			<IconButton>
				<FavoriteBorderIcon />
			</IconButton>
			<IconButton>
				<ShoppingCartOutlinedIcon />
			</IconButton>
		</Box>
	);
};

export const SearchBar: FC = () => {
	return (
		<SearchbarWrapper>
			<SearchInput />
			<SearchButton variant='outlined'>
				<SearchOutlinedIcon />
			</SearchButton>
		</SearchbarWrapper>
	);
};

const Navbar: FC = () => {
	const router = useRouter();
	return (
		<>
			<HideOnScroll>
				<AppBar>
					<Toolbar sx={{ flexDirection: 'column' }}>
						<MainNav>
							<Button
								sx={{ minWidth: '94px' }}
								onClick={() => router.push('/')}
							>
								Cyper Pro
							</Button>
							<SearchBar />
							<MenuIcons />
						</MainNav>
						<Box>
							<CategoryNavbar />
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	);
};

export default Navbar;
