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

// CREATE:

// Student.create({
//   name: "Paula",
//   course: "Web Dev",
//   startedMonth: "October",
//   startedYear: 2018,
//   projects: [ 'X', 'Y', 'Z' ],
//   previousExperience: true
// })
// .then( newStudent => {
//   console.log("New student successfully created in DB: ", newStudent);
// })
// .catch(err => {
//   console.log("Error while creating new instance: ", err);
// })


// ALTERNATIVE WAY TO CREATE INSTANCE IN THE DATABASE

// const camiloInfo = new Student ({
//   name: "Camilo",
//   course: "Web Dev",
//   startedMonth: "December",
//   startedYear: 2018,
//   projects: [ 'game' ],
//   previousExperience: true
// })

// camiloInfo.save()
//   .then( newStudentInfo => {
//     console.log("New student created: ", newStudentInfo)
//   })
//   .catch( err => {
//     console.log("Error while creating new student: ", err)
//   })


// RETRIEVE / READ

// Student.find() // .find() ALWAYS gives back an ARRAY
//   .then( allStudentFromDB => {
//     allStudentFromDB.forEach(student => {
//       console.log(student.name);
//     })
//   })
//   .catch( err => console.log("Error while getting the data from the DB: ", err))

// // .findById() will always give you n OBJECT back
// Student.findById("5c491ad937c7f812a9ad4ff9")
//   .then( theStudent => {
//     console.log("Student is: ", theStudent.name)
//   })
//   .catch( err => {
//     console.log("Err while getting a single student from DB: ", err)
//   })


Student.findOne({ course: "UX" })
  .then( theStudent => {
    console.log("Student is: ", theStudent.name)
  })
  .catch( err => {
    console.log("Error while getting a signle student from DB: ", err)
  })


// UPDATE 

// - 1. ID & 2. Object, Field to be updated
// Student.findByIdAndUpdate("5c491ad937c7f812a9ad4ff9", { name: "Paula S."})
//   .then( updatedStudent => {
//     console.log("Updated Student is: ", updatedStudent)
//   })
//   .catch( err => {
//     console.log("Error while updating: ", err)
//   })

// DELETE

// ------- .findByIdAndDelete or .findByIdAndRemove
// Student.findByIdAndRemove("5c491ad937c7f812a9ad4ff9")
//   .then( student => {
//     console.log(`Student with id: ${student._id} is removed from the DB.`)
//   })
//   .catch( err => {
//     console.log("Error while removing student: ", err)
//   })
// --- OR ---
// Student.findByIdAndDelete("5c4918e5660b09121552ccaa")
// .then( student => {
//   console.log(`Student with id: ${student._id} is removed from the DB.`)
// })
// .catch( err => {
//   console.log("Error while removing student: ", err)
// })


app.listen(3000, () => {
  console.log("Listening on 3000 !")
});