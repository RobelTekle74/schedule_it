// To pull down all the employee names and role to the front end.
const axios = require('axios');
const ejs = require('ejs');

axios.get(db.data) //#endregion
    .then(function (response) {
        document.getElementById("cell2").innerHTML = response.data.name;
    })

// To post all information created for employee to the data base.
document.getElementById("submit").onclick = 
app.post('/owner_page/createEmployeeAcct.html', function(req, res, next) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 10);
    db.query(`INSERT INTO user (email, password, *) VALUES ('${req.body.email}', '${hashedPassword}', '*')`);
});