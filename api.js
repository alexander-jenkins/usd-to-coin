const express = require('express');
const app = express();

const btcPrice = 39971.2;
const ethPrice = 3018.72;

app.get('/api/:cryptoName', (req, res) => {
  cryptoName = req.params.cryptoName;
  if (cryptoName === 'btc')
    res.status(200).send({ amount: req.query.usd / btcPrice });
  else if (cryptoName === 'eth')
    res.status(200).send({ amount: req.query.usd / ethPrice });
  else res.status(404).send('404: Page not found');
});

app.get('*', (req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
