const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect( process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// CREATING USER MODEL
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         lowercase: true,
//         trim: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         minlength: 7,
//         validate(value) {
//             if (value == 'password') {
//                 throw new Error('password can\'t be letterly "password"')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a postive number')
//             }
//         }

//     }
// })

// SAVING NEW USER
// const me = new User({
//     name: '   kamal   ',
//     email: 'myEMAIL@GH.COM',
//     password: '123pass',
//     age: 27
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log(err)
// })

// CREATING TASK MODEL
// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     }, 
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// SAVING NEW TASK
// const task = new Task({
//     description: 'wake up early',
//     completed: true
// })
// task.save().then(() => {
//     console.log(task)
// }).catch((err) => {
//     console.log(err)
// })