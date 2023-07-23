const functions = require('@google-cloud/functions-framework');

functions.http('login', (req, res) => {
  res.send('hello, please login');
});

functions.http('getData', (req, res) => {
  res.send('getData success');
});
