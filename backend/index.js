//Declaring packages
const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
    console.log(req.originalUrl)
    next();
})

const db = require("./models");
db.sequelize.sync();

const routes = require("./routes/routes")

const port = process.env.PORT || 8000;
app.use('/home', routes);

//test runnning back
app.get('/', (req, res) => {
    res.sendStatus(418)
  })
  
  app.listen(port, console.log(`Server started on port ${port}!`));