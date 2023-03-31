const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.status(200).json({ result: 'API OK!' });
});

app.listen(3000);
