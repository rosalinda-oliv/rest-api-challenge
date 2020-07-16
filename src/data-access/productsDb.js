export default function makeProductsDb({makeDb}) {
	async function listAll() {
		const db = await makeDb();
		return await db.collection('products').find({});
	}

	async function insertAll({products}) {
		const db = await makeDb();
		return await db.collection('products').insertMany({products});
	}

	return Object.freeze({
		listAll,
		insertAll
	});
}
