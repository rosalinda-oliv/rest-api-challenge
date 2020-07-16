export default function makeOfficesDb({makeDb}) {
	async function listAll() {
		const db = await makeDb();
		return await db.collection('offices').find({});
	}
	async function insertAll({offices}) {
		const db = await makeDb();
		return await db.collection('offices').insertMany({offices});
	}
	return Object.freeze({
		listAll,
		insertAll
	});
}