// const express = require('express');
// const app = express();

// const models = require('./models')

// app.set('view engine', 'ejs');
// app.set('views', 'app/views');


// const express = require('express'); const mongoose = require('mongoose');  const app = express(); const PORT = process.env.PORT || 3000;  const config = require('./db');  mongoose.connect(config.DB, { useNewUrlParser: true }).then(   () => {console.log('Database is connected') },   err => { console.log('Can not connect to the database'+ err)} );

// // models.user.create({id: 0001, role: "owner", name: "Ashley Souvannaraj", email: "asouvannaraj@gmail.com", password: "password", phone: 1234566674})
// //     .then(function (user) {
// //     console.log(user);
// // });

// models.user.findAll({where: {name: 'ashley'}})
//   .then((results) => {
//     results.forEach(function(index){
//             console.log(index.id, index.ashley);
//         })
//   });



// app.listen(3000);