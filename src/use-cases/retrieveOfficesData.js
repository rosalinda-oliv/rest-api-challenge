export default function makeRetrieveOfficesData({ officesDb }) {
	return async function retrieveOfficesData() {
		return officesDb.findAll();
	};
}