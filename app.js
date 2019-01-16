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

//bcrypt
const bcrypt = require('bcrypt');

app.post('/owner_page/createEmployeeAcct.html', function(req, res, next) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 10);
    db.query(`INSERT INTO user (email, password, *) VALUES ('${req.body.email}', '${hashedPassword}', '*')`);
});


//passport and login paths
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret: 'robeltakesgirlbaths'}));

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


//page routes
app.get('/', passport.authenticate('local', { failureRedirect: '/'}), function(req, res) {
    if(result.role = 'owner') {
        res.redirect('/ownerDashboard');
    } else {
        res.redirect('/employeeDashboard');
    }
})
app.get('/owner_page/ownerDashboard.html', passport.authenticate('local', { failureRedirect: '/'}), function(req, res) {
    res.render('/owner_page/ownerDashboard.html');
});



//This is for testing locally
function run() {
    app.listen(3000);
    console.log('Listening on port 3000');
}

run();