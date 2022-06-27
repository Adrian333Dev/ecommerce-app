import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IProduct } from '../models/IProduct';

export const dummyAPI = createApi({
	reducerPath: 'dummyAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com',
	}),
	tagTypes: ['Product'],
	endpoints: (build) => ({
		// ! Get All Products
		fetchAllProducts: build.query<IProduct[], number>({
			query: (limit: number = 100) => ({
				url: `/products?limit=${limit}`,
			}),
			providesTags: (result) => ['Product'],
		}),
		// ! Get Product by Id
		fetchProduct: build.query<IProduct, number>({
			query: (id: number) => ({
				url: `/products/${id}`,
			}),
			providesTags: (result) => ['Product'],
		}),
		// ! Get Product by Category
		fetchProductsByCategory: build.query<IProduct[], string>({
			query: (category: string) => ({
				url: `/products/category/${category}`,
			}),
		}),
		// ! Search Products
		searchProducts: build.query<IProduct[], string>({
			query: (query: string) => ({
				url: `/products/search?q=${query}`,
			}),
			providesTags: (result) => ['Product'],
		}),
		// ! Limit and skip Products
		limitAndSkipProducts: build.query<IProduct[], object>({
			query: ({ limit = 100, skip = 0 }: any) => ({
				url: `/products?limit=${limit}&skip=${skip}`,
			}),
		}),

		// ! ------------------ //

		// ! Get All Categories
		fetchAllCategories: build.query<string[], number>({
			query: (limit: number = 5) => ({
				url: `/products/categories?limit=${limit}`,
			}),
		}),
	}),
});
