const express = require('express');

require('express-async-errors');

const app = express();

const routes = require('./src/routes');
app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));