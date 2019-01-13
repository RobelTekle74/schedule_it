const express = require('express');
const app = express();

const models = require('./models')

app.set('view engine', 'ejs');
app.set('views', 'app/views');


// models.user.create({id: 0001, role: "owner", name: "Ashley Souvannaraj", email: "asouvannaraj@gmail.com", password: "password", phone: 1234566674})
//     .then(function (user) {
//     console.log(user);
// });

models.user.findAll({where: {name: 'ashley'}})
  .then((results) => {
    results.forEach(function(index){
            console.log(index.id, index.ashley);
        })
  });



app.listen(3000);