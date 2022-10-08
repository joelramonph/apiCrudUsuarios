const express = require('express')

const userRouter = require('./users/users.router')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/', userRouter)

app.listen(8000, () => {
    console.log('Server started at port 8000')
})