const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//======================================================
app.get('/test', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello, World!');
});
app.post('/login', (req: { body: any; }, res: { send: (arg0: any) => void; }) => {
    // Do your login logic here
    res.send(req.body)
});
//======================================================
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});