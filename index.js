import express from 'express';
import db from './config/database.js';
import opdRoutes from './routes/index.js';
import pelayananRoutes from './routes/pelayananRoutes.js';
import cors from 'cors';

const app = express();


try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
}catch(error){
    console.log('Unable to connect to the database.', error);
}
app.use(cors());
app.use(express.json());
app.use('/opd', opdRoutes);
app.use('/pelayanan', pelayananRoutes);

app.listen(5000, () => console.log('Server started on port 5000')); 