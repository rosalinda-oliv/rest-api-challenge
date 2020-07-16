import {updateOffices} from '../use-cases';
import {officesDb} from '../data-access';

export default function makeRetrieveOfficesDataController({retrieveOfficesData}) {
	return async function retrieveOfficesDataController(httpRequest) {
		const headers = {
			'Content-Type': 'application/json'
		};
		try {

			const isUpdated = await updateOffices(officesDb);
			if (isUpdated) {
				throw Error('Unknown Error');
			}

			const officesData = await retrieveOfficesData();
			if (officesData)

				return {
					headers,
					statusCode: officesData ? 200 : 500,
					body: {
						officesData
					}
				};
		} catch (e) {
			console.error(e);
			return {
				headers,
				statusCode: 400,
				body: {
					error: e.message
				}
			};
		}
	};
}