import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { userHandlers } from './handlers/userHandler';
import { productHandlers } from './handlers/productHandler';
import { orderHandlers } from './handlers/orderHandler';
dotenv.config();
const app: express.Application = express();
const address: string = `0.0.0.0:${process.env.PORT}`;
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});
productHandlers(app);
userHandlers(app);
orderHandlers(app);

app.listen(process.env.PORT, function () {
  console.log(`starting app on: ${address}`);
});
export default app;
