const functions = require('@google-cloud/functions-framework');

functions.http('login', (req, res) => {
  res.send('hello, please login');
});
