import { GET_FOOD_SERVICE } from './foodServiceTypes';

const initialState = {
	foodService: [
		{
			id: 1,
			companyUniqueKey: 'string',
			title: 'Pasta',
			description: 'Prepared with giant 300 gram',
			vendorCategoryId: 1,
			systemCategoryId: 1,
			image: 'https://avatars.dicebear.com/v2/male/:seed.svg',
			regularPrice: 10.0,
			vendorFoodAdditionals: [
				{
					id: 1,
					title: 'Pasta',
					description: 'Prepared with giant 300 gram',
					required: true,
					requiredNumber: 0,
					vendorFoodAdditionalItems: [
						{
							id: 1,
							title: 'string',
							price: 10.0,
						},
					],
				},
				{
					id: 62,
					title: 'Add On',
					description: 'Prepared with giant 300 gram',
					required: true,
					requiredNumber: 0,
					vendorFoodAdditionalItems: [
						{
							id: 77,
							title: 'Cheese',
							price: 10.0,
						},
					],
				},
			],
			createdAt: '2021-08-31T10:21:50.000+00:00',
			updatedAt: '2021-11-09T11:20:45.000+00:00',
		},
		{
			id: 2,
			companyUniqueKey: 'string',
			title: 'Pizza 2.0',
			description: 'Prepared with giant 300 gram',
			vendorCategoryId: 1,
			systemCategoryId: 1,
			image: 'https://avatars.dicebear.com/v2/male/:seed.svg',
			regularPrice: 10.0,
			vendorFoodAdditionals: [
				{
					id: 2,
					title: 'Nagga',
					description: 'Prepared with giant 300 gram',
					required: true,
					requiredNumber: 0,
					vendorFoodAdditionalItems: [
						{
							id: 2,
							title: 'string',
							price: 10.0,
						},
					],
				},
			],
			createdAt: '2021-08-31T10:21:50.000+00:00',
			updatedAt: '2021-11-09T11:20:45.000+00:00',
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
