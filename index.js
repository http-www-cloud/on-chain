const express = require('express');
const config = require('./config');
const apiRoutes = require('./routes/api');

const app = express();
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

app.listen(config.port, () => {
  console.log(`Server running in ${config.env} mode on port ${config.port}`);
});
