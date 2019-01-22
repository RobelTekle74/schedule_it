const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const models = require('./models');

app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.post('/eAC.ejs', function(req,res,next) {

  var hashedPassword = bcrypt.hashSync(req.body.password, 10);

  models.user.create({role: "employee", name: `${req.body.name}`, email: `${req.body.email}`, password: hashedPassword, phone: `${req.body.phone}`})
    .then(function (user) {
    console.log(user);
}).catch(e => {
  console.log(e)
})
})


app.post('/generateSchedule', function (req,res,next) {

  models.schedule.create({id: `${req.body.cell1}`, monday: `${req.body.cell2}`, tuesday: `${req.body.cell3}`, wednesday: `${req.body.cell4}`, thursday: `${req.body.cell5}`, friday: `${req.body.cell6}`, saturday: `${req.body.cell7}`, sunday: `${req.body.cell8}`})
  .then(function (schedule) {
    console.log(schedule);
  }).catch(err);
})

// app.get('/genS.ejs', function(req, res, next) {
//   models.schedule.findAll().then(function() {
    
//   })
// })



app.listen(3000);