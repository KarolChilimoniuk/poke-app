const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const atlasURI = process.env.ATLAS_URI;

mongoose.connect(atlasURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Database works'))
  .catch(err => console.log(err, "Database not work"));

// const db = mongoose.connection;
// db.on('error', () => console.error('Mongo connection error'));
// db.once('open', () => {
//   console.log('Mongo connection succeed');
// });

app.get('/', (req, res)=> {
    res.send('Get request succed');
})

app.listen(port, () => {
    console.log('Server works fine ;]');
});