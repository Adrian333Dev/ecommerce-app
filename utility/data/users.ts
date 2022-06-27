import bcrypt from 'bcryptjs';

// TODO: create IUser interface
export const users: any = [
	{
		name: 'John',
		email: 'admin@gmail.com',
		password: bcrypt.hashSync('123456'),
		isAdmin: true,
	},
	{
		name: 'Peter',
		email: 'user@gmail.com',
		password: bcrypt.hashSync('654321'),
		isAdmin: false,
	},
];
