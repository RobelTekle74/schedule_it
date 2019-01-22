const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

//We need this to go back and forth from the website, I think
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//This part is if we want to use EJS for the html
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//passport
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


//sign in routes
app.get('/signIn', passport.authenticate('local', { failureRedirect: '/'}), function(req, res) {
    if(result.role = 'owner') {
        res.redirect('/owner');
    } else {
        res.redirect('/employee');
    }
})

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/owner', /* passport.authenticate('local', { failureRedirect: '/home'}), */ function(req, res) {  
    res.render('oDash');
});

app.get('/employee', passport.authenticate('local', { failureRedirect: '/home'}), function (req, res) {
    res.render('eDash');
});
app.get('/generateSchedule', function (req, res) {
    res.render('genS');
});
app.get('/createAccount', function (req, res) {
    res.render('eAC');
});




//This is for testing locally
function run() {
    app.listen(3000);
    console.log('Listening on port 3000');
}

run();