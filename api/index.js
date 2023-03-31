const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.status(200).json({ result: 'API OK!' });
});

app.get('/api/user', (req, res) => {
  res.status(200).json({ name: 'Jean' });
});

app.listen(3000);
