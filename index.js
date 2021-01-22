const DB = require('./App/Utils/db.config')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.options('*', cors())

const routes = require('./App/Routes/url-shortner.route');

app.use('', cors(), routes)

//App listen
app.listen(process.env.PORT || 8080, async () => {
    await DB();
    console.log('URL Shortener API is running on port '+process.env.PORT);
});