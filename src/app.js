const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cors());

const taskRoutes = require('./routes/task.router');
app.use('/api', taskRoutes);

module.exports = app;

