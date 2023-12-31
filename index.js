import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.send("Server is working");
})


app.listen(PORT, () => {
    console.log(`The server is live at port: http://localhost:${PORT}`);
})