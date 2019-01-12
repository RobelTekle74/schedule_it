const express = require('express');
const app = express();

//We need this to go back and forth from the website, I think
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//This part is if we want to use EJS for the html
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//This is for testing locally
function run() {
    app.listen(3000);
    console.log('Listening on port 3000');
}

run();