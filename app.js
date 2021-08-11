const express = require('express');
const app = express();
const port = 3000;

app.get('/auth', (req, res) => {
  res.json({
      status: 1,
      message: 'This is the auth route.'
  });
})

app.get('/users', (req, res) => {
    res.json({
        status: 1,
        message: 'This is the users route.'
    });
  })

app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
})