export default function makePeopleDb({makeDb}) {
	async function listAll() {
		const db = await makeDb();
		return await db.collection('people').find({});
	}

	async function insertAll({people}) {
		const db = await makeDb();
		return await db.collection('people').insertMany({people});
	}

	return Object.freeze({
		listAll,
		insertAll
	});
}
