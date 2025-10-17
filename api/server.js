import express, { json } from 'express';
import cors from 'cors';
import { routes } from './src/routes.js';

const port = process.env.PORT || 3001;
const app = express();
app.use(json());
app.use(cors());
app.use(routes);

app.listen(port, (req, res) => {
    console.log('API respondendo em http://localhost:' + port)
});