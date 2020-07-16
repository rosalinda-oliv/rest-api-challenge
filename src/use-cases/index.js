import updateOffices from './update-db/updateOffices';
import makeRetrieveOfficesData from './retrieveOfficesData';
import officesDb from '../data-access/officesDb';

const retrieveOfficesData = makeRetrieveOfficesData({officesDb});

export {
	updateOffices,
	retrieveOfficesData
};