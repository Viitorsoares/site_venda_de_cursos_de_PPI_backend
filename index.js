const express = require('express');

// porta e host
const app = express();
const port = 3000;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});