import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { retrieveOfficesDataController} from './controllers';
import makeExpressCallback from './express-callback';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
const apiInfo = { name: 'dealership-API', version: '1.0.0'};

app.get('/dealership', (req, res) => {
    res.send(apiInfo);
});

app.get('/dealership/offices', makeExpressCallback(retrieveOfficesDataController));

app.listen(PORT, () => console.log('server on fire baby!'));

export default app;