import { GET_FOOD_SERVICE } from './foodServiceTypes';

const initialState = {
	foodService: [
		{
			id: 1,
			companyUniqueKey: 'chillox',
			title: 'chicken cheese burger',
			description: 'chicken cheese burger',
			image: 'https://data.thefeedfeed.com/recommended/post_4948975.jpeg',
			regularPrice: 0.0,
			vendorFoodAdditionals: [
				{
					id: 1,
					title: 'cheese level',
					description: 'cheese level',
					required: true,
					requiredNumber: 1,
					vendorFoodAdditionalItems: [
						{
							id: 1,
							title: 'high',
							price: 0.0,
						},
						{
							id: 2,
							title: 'low',
							price: 0.0,
						},
						{
							id: 3,
							title: 'medium',
							price: 0.0,
						},
					],
				},
			],
			createdAt: '2021-12-15T07:07:22.000+00:00',
			updatedAt: '2021-12-15T07:07:22.000+00:00',
		},
		{
			id: 2,
			companyUniqueKey: 'chillox',
			title: 'beef cheese burger',
			description: 'beef cheese burger',
			image:
				'https://www.rnz.co.nz/assets/news_crops/79128/eight_col_Burger_Burger_Classic_Beef___Cheese.jpg?1556670605',
			regularPrice: 0.0,
			vendorFoodAdditionals: [
				{
					id: 2,
					title: 'cheese level',
					description: 'cheese level',
					required: true,
					requiredNumber: 1,
					vendorFoodAdditionalItems: [
						{
							id: 4,
							title: 'high',
							price: 0.0,
						},
						{
							id: 5,
							title: 'low',
							price: 0.0,
						},
						{
							id: 6,
							title: 'medium',
							price: 0.0,
						},
					],
				},
				{
					id: 3,
					title: 'spice level',
					description: 'spice level',
					required: true,
					requiredNumber: 1,
					vendorFoodAdditionalItems: [
						{
							id: 7,
							title: 'spicy',
							price: 0.0,
						},
						{
							id: 8,
							title: 'mild',
							price: 0.0,
						},
					],
				},
			],
			createdAt: '2021-12-15T07:09:52.000+00:00',
			updatedAt: '2021-12-15T07:09:52.000+00:00',
		},
	],
};

export const get_food_service_data = (state = initialState, action) => {
	switch (action.type) {
		case GET_FOOD_SERVICE:
			return { ...state };
		default:
			return state;
	}
};
