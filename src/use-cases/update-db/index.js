import makeUpdateOffices from './updateOffices';
import officesDb from '../../data-access/officesDb';

const updateOffices = makeUpdateOffices({officesDb});

export { updateOffices };