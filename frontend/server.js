const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const qs = require('qs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});



app.post('/submit', async (req, res) => {
  try {
    const response = await axios.post(
      'http://backend:5000/process',
      qs.stringify(req.body),  // convert to form-urlencoded
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    res.send(`Backend response: ${response.data.message}`);
  } catch (err) {
    res.status(500).send('Error connecting to backend');
  }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
