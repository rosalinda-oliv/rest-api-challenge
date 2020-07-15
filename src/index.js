import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/hello',(req, res) => {
	res.send('hello world');
});

app.listen(4000, () => console.log('server on baby!'));

export default app;