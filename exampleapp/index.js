'use strict';

const express = require('express');

//could be env variables - we dont want to hardcode these stuff -> we want to configure connections 

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);