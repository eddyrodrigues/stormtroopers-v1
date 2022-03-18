import {} from 'dotenv/config'
import express from 'express';
import routes from './routes/index.js';
import errorHandler from './routes/middle/index.js';
import cors from 'cors'

const app = express();




app.use(express.json())
app.use(cors())

app.use(routes);
app.use(errorHandler);

app.listen(process.env.PORT_DEVELOPMENT, () => {
    console.log("The server is listening to " + process.env.PORT_DEVELOPMENT);
})