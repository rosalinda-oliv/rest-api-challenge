import {retrieveOfficesData} from '../use-cases';
import makeRetrieveOfficesDataController from './makeRetrieveOfficesDataController';

const retrieveOfficesDataController = makeRetrieveOfficesDataController({retrieveOfficesData});

const dealerShipControllers = Object.freeze({
	retrieveOfficesDataController
});

export default dealerShipControllers;

export {
	retrieveOfficesDataController
};