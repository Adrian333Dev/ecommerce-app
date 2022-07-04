import { useRouter } from 'next/router';

const index = () => {
	const { query } = useRouter();
	const { category } = query;
	return <div>{category}</div>;
};

export default index;
