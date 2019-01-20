const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//This part is if we want to use EJS for the html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


router.get('/employee', function(req, res) {
    res.render('employee')
});


















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



//This is for testing locally
function run() {
    app.listen(3000);
    console.log('Listening on port 3000');
}

run();