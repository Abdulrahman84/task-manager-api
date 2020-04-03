const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     res.status(503).send('sorry we are off, comeback later')
// })

// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myfunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thatisnot', {expiresIn: '7 days'})
//     console.log(token)
//     const data = jwt.verify(token, 'thatisnot')
//     console.log(data)
// }

// const bcrypt = require('bcrypt')

// const myfunction = async () => {
//     const password = 'blue123'
//     const hashedPass = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPass)

//     const isMatch = await bcrypt.compare(password, hashedPass)
//     console.log(isMatch)
// }

//myfunction()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5e7df845737be3171cdfb21c')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e7df68ad01ae53984ac9e1b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000 // 1Mb in byetes
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx')$/)) {
//             return cb(new Error('please upload a Word document'))
//         }
//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message})
// })