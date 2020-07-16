import mongodb from 'mongodb';
import makeOfficesDb from './officesDb';
import makePeopleDb from './peopleDb';
import makeProductsDb from './productsDb';

require('dotenv/config');

const url = process.env.DB_CONNECTION;
const { MongoClient } = mongodb;
const client = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

export async function makeDb() {
	if (!client.isConnected()) {
		console.warn('connecting...');
		await client.connect();
	}
	console.log('connected');
	return client.db('rest-challenge');
}

const officesDb = makeOfficesDb({ makeDb });
const productsDb = makeProductsDb({ makeDb });
const peopleDb = makePeopleDb({ makeDb });


export { officesDb, productsDb, peopleDb };