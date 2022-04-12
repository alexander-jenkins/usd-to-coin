const express = require('express');
const app = express();

const btcPrice = 39971.2;
const ethPrice = 3018.72;

app.get('/api/:cryptoName', (req, res) => {
  cryptoName = req.params.cryptoName;
  if (cryptoName === 'btc') res.send({ amount: req.query.usd / btcPrice });
  else if (cryptoName === 'eth') res.send({ amount: req.query.usd / ethPrice });
  else res.sendStatus(404);
});

app.get('/*', (req, res) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
