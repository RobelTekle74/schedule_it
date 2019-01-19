const express = require('express');
const router = express.Router();
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
// const bcrypt = require('bcrypt');

// app.post('/owner_page/createEmployeeAcct.html', function(req, res, next) {
//     var hashedPassword = bcrypt.hashSync(req.body.password, 10);
//     db.query(`INSERT INTO user (email, password, *) VALUES ('${req.body.email}', '${hashedPassword}', '*')`);
// });

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/owner', function(req, res) {  
    res.render('oDash');
});

app.get('/employee', function (req, res) {
    res.render('eDash');
});

// function oDash() {
//     location.href = "./oDash.ejs";
// };
// function eDash() {
//     location.href = "./eDash.ejs";
// };

//passport
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');

// app.use(session({secret: 'robeltakesgirlbaths'}));

// passport.use(new LocalStrategy({usernameField: 'email'}, function(email, password, done) {
//     db.one(`SELECT * FROM user WHERE email = '${email}'`)
//         .then(function(result) {

//             let fetchedPassword = result.password;
//             let isPasswordMatch = bcrypt.compareSync(password, fetchedPassword);

//             if(isPasswordMatch) {
//                 done(null, result);
//             } else {
//                 done(null, false)
//             };
//         }).catch(function(err){
//                 done(null, false);
//         });
// }));



// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, done) {
//     done(null, {
//         id: user.id,
//         email: user.email
//     });
// });

// passport.deserializeUser(function(cookie, done) {
//     db.query(`SELECT * FROM user WHERE id = '${cookie.id}'`).then(function(user) {
//         done(null, user);
//     });
// });


// //page routes
// app.get('/', passport.authenticate('local', { failureRedirect: '/'}), function(req, res) {
//     if(result.role = 'owner') {
//         res.redirect('/owner_page/ownerDashboard.html');
//     } else {
//         res.redirect('/employee_page/employeeP.html');
//     }
// })




// passport.authenticate('local', { failureRedirect: '/'}),

//This is for testing locally
function run() {
    app.listen(3000);
    console.log('Listening on port 3000');
}

run();