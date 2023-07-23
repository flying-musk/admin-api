const functions = require('@google-cloud/functions-framework');

functions.http('login', (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    console.log(req.body, username, password);
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    res.status(405).send('Method Not Allowed');
  }
});

functions.http('getData', (req, res) => {
  res.send('getData success');
});
