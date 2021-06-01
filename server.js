const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// how to run sql script on cmd: mysql -u root -p -h 127.0.0.1 < *insert script file here*
// mysqldump -h 127.0.0.1 -u root -p -database=*YOURDB* (or --all-databases) > dump.sql

