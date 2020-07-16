import dotenv from 'dotenv';
import needle from 'needle';

dotenv.config();

export default function getDataFromApi() {
	async function authenticate() {
		const user = process.env.USER;
		const password = process.env.PASS;
		return needle.post(process.env.LOGIN_URL, {
			email: user,
			password: password
		}, {json: true}, (error, response, body) => {
			if (error) {
				throw error;
			}
			return body.token;
		});
	}
	async function products() {
		return needle.get(process.env.PRODUCS_URL, {json: true}, (err, res) => {
			if (err) {
				console.error(err);
				return err;
			}
			return res;
		});
	}
	async function people({authenticate}) {
		const token = await authenticate();
		const options = {headers: {'Authorization': `Bearer ${token}`}};
		needle.get(process.env.PEOPLE, options, (err, resp) => {
			if (err) {
				throw err;
			}
			return resp;
		});
	}
	async function offices({authenticate}) {
		const token = await authenticate();
		const options = {headers: {'Authorization': `Bearer ${token}`}};
		needle.get(process.env.OFFICES, options, (err, resp) => {
			if (err) {
				throw err;
			}
			return resp;
		});
	}
	return Object.freeze({
		authenticate,
		people,
		offices,
		products
	});
}

