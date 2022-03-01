

const express = require('express')

const dataService = require('./services/data.services')

const jwt = require('jsonwebtoken')

const cors = require('cors')




const app = express()



app.use(cors({
    origin: 'http://localhost:4200'
}))



app.use(express.json())






app.get('/', (req, res) => {

    res.status(401).send("GET REQUEST!!!!")

})




app.post('/', (req, res) => {
    res.send("POST REQUEST!!!!")

})

app.put('/', (req, res) => {
    res.send("PUT REQUEST!!!!")

})


app.patch('/', (req, res) => {
    res.send("PATCH REQUEST!!!!")

})


app.delete('/', (req, res) => {
    res.send("DELETE REQUEST!!!!")

})






app.use((req, res, next) => {

    console.log(" APPLICATION SPECIFIC MIDDLEWARE-1")

    next()
})


const logMiddleware = (req, res, next) => {

    console.log("APPLICATION SPECIFIC MIDDLEWARE-2")

    next()
}
app.use(logMiddleware)





const jwtMiddleware = (req, res, next) => {

    try {
        const token = req.headers["x-access-token"]

        const data = jwt.verify(token, 'supersecretkey123')

        req.currentUserName = data.currentUserName

        next()

    }
    catch {
        res.json({
            statusCode: 401,
            status: false,
            message: "Please Log In!!!!"
        })
    }

}








app.get('/register', (req, res) => {

    console.log(req.body)

    dataService.register( req.body.password, req.body.uname)
        .then(result => {
            res.status(result.statusCode).json(result)

        })


})



app.get('/login', (req, res) => {

    console.log(req.body)

    dataService.login( req.body.password)
        .then(result => {
            res.status(result.statusCode).json(result)
        })


})












app.listen(3000, () => {

    console.log("Server Started at 3000")
})
