import cors from 'cors';
import express from 'express';
import router from './routes/restaurant.route';
import routerUser from './routes/user.route';

const app = express();
const port = 8888;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(routerUser);

app.listen(port, () => {
    console.log('App starting...')
})