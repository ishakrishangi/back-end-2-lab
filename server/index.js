const express = require('express');
const cors = require('cors');
const {getHouses, deleteHouse, createHouse, updateHouse } = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
//id can be called whatever lol
const SERVER_PORT = 4400

app.listen(SERVER_PORT,() => console.log(`server running ${SERVER_PORT}`))