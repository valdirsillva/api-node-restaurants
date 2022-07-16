import express from 'express';
import router from './routes/restaurant.route';
import routerUser from './routes/user.route';

const app = express();
const port = 8888;

app.use(express.json());
app.use(router);
app.use(routerUser);

app.listen(port, () => {
    console.log('App starting...')
})