const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const models = require('./models');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//EJS for the html
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.get('/', function (req, res) {
    res.render('home');
});

//routes
app.get('/owner', function(req, res) {  
    res.render('oDash');
});

app.get('/employee', async function(req, res) {
    const schedule = await models.schedule.findAll({});
    const user = await models.user.findAll({});
    res.render('eDash', {schedules: schedule, users: user})
    res.end()
});

app.get('/createAccount', async function (req, res) {
    const user = await models.user.findAll({});
    res.render('eAC', {users: user})
    res.end()
});

app.post('/createEmployeeAcct', function(req,res,next) {
    console.log(req.body)
    var hashedPassword = bcrypt.hashSync(req.body.password, 10);
    
    models.user.create({role: 'employee', name: `${req.body.name}`, email: `${req.body.email}`, password: hashedPassword, phone: `${req.body.phone}`})
      .then(function (user) {
        res.redirect('/createAccount')
  }).catch(e => {
    console.log(e)
  })
})
  
app.post('/generateSchedule', function (req,res,next) {
    var id = req.body.cell1
    var m = req.body.cell2
    var tu = req.body.cell3
    var w = req.body.cell4
    var thu = req.body.cell5
    var f = req.body.cell6
    var sa = req.body.cell7
    var su = req.body.cell8

    models.schedule.create({userid: id, monday: m, tuesday: tu, wednesday: w, thursday: thu, friday: f, saturday: sa, sunday: su})
    .then(function (schedule) {
      res.redirect('/generateSchedule')
    }).catch(function(err) {
        console.log(err)
    });
  })

  app.get('/generateSchedule', async function(req, res) {
      const schedule = await models.schedule.findAll({});
      const user = await models.user.findAll({});
      res.render('genS', {schedules: schedule, users: user})
      res.end()
      
  })


  app.get('/logout', function(req,res) {
      req.logout();
      res.redirect('/');
  })

function run() {
    app.listen(3000);
    console.log('Listening on port 3000');
}

run();