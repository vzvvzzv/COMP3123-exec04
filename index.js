let express = require('express')
let app = express()

// GET /hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

// GET /user Querystring
// http://localhost:8090/user?firstname=Deniz&lastname=Dogan
app.get("/user", (req, res) => {
    let firstname = req.query.firstname
    let lastname = req.query.lastname
    
    response = {
        status: "success",
        firstname,
        lastname,
    }

    res.send(response)
})

// POST /user Path
// http://localhost:8090/user/Deniz/Dogan
app.post("/user/:firstname/:lastname", (req, res) => {
    let firstname = req.params.firstname
    let lastname = req.params.lastname
    
    response = {
        status: "success",
        firstname,
        lastname,
    }

    res.send(response)
})


let server = app.listen(8090, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s", host, port)
})

