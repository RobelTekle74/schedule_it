const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const models = require('./models');

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//EJS for the html
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret: 'schedule-it'}));

passport.use(new LocalStrategy({usernameField: 'email'}, function(email, password, done) {
    db.one(`SELECT * FROM user WHERE email = '${email}'`)
        .then(function(result) {

            let fetchedPassword = result.password;
            let isPasswordMatch = bcrypt.compareSync(password, fetchedPassword);

            if(isPasswordMatch) {
                done(null, result);
            } else {
                done(null, false)
            };
        }).catch(function(err){
                done(null, false);
        });
}));



app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, {
        id: user.id,
        email: user.email
    });
});

passport.deserializeUser(function(cookie, done) {
    db.query(`SELECT * FROM user WHERE id = '${cookie.id}'`).then(function(user) {
        done(null, user);
    });
});


//routes
app.post('/signIn', passport.authenticate('local', { failureRedirect: '/'}), function(req, res) {
    if(result.role = 'owner') {
        res.redirect('/owner');
    } else {
        res.redirect('/employee');
    }
});

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/owner', /*passport.authenticate('local', { failureRedirect: '/'}),*/ function(req, res) {  
    res.render('oDash');
});

app.get('/employee', passport.authenticate('local', { failureRedirect: '/'}), function (req, res) {
    res.render('eDash');
});

app.get('/generateSchedule', function (req, res) {
    res.render('genS');
});

app.get('/createAccount', function (req, res) {
    res.render('eAC');
});

app.post('/generateSchedule', function (req,res,next) {
    var id = req.body.cell1
    var m = req.body.cell2
    var tu = req.body.cell3
    var w = req.body.cell4
    var thu = req.body.cell5
    var f = req.body.cell6
    var sa = req.body.cell7
    var su = req.body.cell8

    models.schedule.create({id: id, monday: m, tuesday: tu, wednesday: w, thursday: thu, friday: f, saturday: sa, sunday: su})
    .then(function (schedule) {
      res.redirect('/generateSchedule')
    }).catch(function(err) {
        console.log(err)
    });
});

app.post('/createEmployeeAcct', function(req, res) {
    var hashedPassowrd = bcrypt.hashSync(req.body.password, 10);

    models.user.create({role: 'owner', name: `${req.body.name}`, email: `${req.body.email}`, password: hashedPassowrd, phone: `${req.body.phone}`})
      .then(function (user) {
          res.redirect('/createAccount');
      }).catch(e => {
          console.log(e);
      });
});




function run() {
    app.listen(3000);
    console.log('Listening on port 3000');
}

run();