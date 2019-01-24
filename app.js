const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');

// import model to make it available in this file:
const Student = require('./models/student-model');

// connect with database:
//                            here you name your DB
//                            |
mongoose.connect("mongodb://localhost/studentBook");


// we create our application here:
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


Student.create({
  name: "Ana",
  course: "UX",
  startedMonth: "January",
  startedYear: 2018,
  projects: [ 'X', 'Y', 'Z' ],
  previousExperience: false
})
.then( newStudent => {
  console.log("New student successfully created in DB: ", newStudent);
})
.catch(err => {
  console.log("Error while creating new instance: ", err);
})




app.listen(3000, () => {
  console.log("Listening on 3000 !")
});