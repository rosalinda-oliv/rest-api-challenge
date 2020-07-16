import getDataFromApi from '../../demo-app-callback';

export default function makeUpdateOffices({officesDb}) {
    return async function updateOffices() {
        const apiData = getDataFromApi(officesDb);
        const officesData = apiData.offices(apiData.authenticate());
        if (!officesData) {
            throw new Error('Error trying to retrieve data from api.');
        }
        const dataInDb = await officesDb.findAll();
        let result;
        if (dataInDb !== officesData) {
            result = officesDb.insertAll(officesData);
        }
        if (result) {
            return true;
        }
    };
}