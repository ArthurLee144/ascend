const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('Hello, world');
});

app.listen(3000, ()=>{
  console.log('Ascend app is listening on port 3000');
});
