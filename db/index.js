import dotenv from 'dotenv';
import { makeDb } from '../src/data-access';

dotenv.config();

(async function setupDb() {
	console.log('Setting up database...');
	const db = await makeDb();
	const dealershipResult = await db
		.collection('backoffice')
		.createIndexes([{ key: { id: 1 }, unique: true }]);
	console.log(dealershipResult.note);
	console.log('Database setup complete...');
	process.exit();
}());
