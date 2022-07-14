import express from 'express';
import restaurantRoute from './routes/restaurant.route';

const app = express();
const port = 8000;

app.use(express.json());
app.use(restaurantRoute);

app.listen(port, () => {
    console.log('App starting...')
})