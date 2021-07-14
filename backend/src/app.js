import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions';

import taskRoutes from './routes/tasks.routes';

const app = express();

const specs = swaggerJSDoc(options);

app.use(cors())
app.use(morgan('combined'))
app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app;