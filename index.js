const express = require('express');

require('express-async-errors');

const app = express();

app.use(express.json());

const routes = require('./src/routes');

app.use(routes);

const { errorHandler } = require('./src/middlewares');

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
