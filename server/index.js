const express = require(`express`)
const cors = require(`cors`)
const app = express()
app.use(express.json())
app.use(cors())

let friends = [`Nitin`, `Eric`, `Jeddy`, `Cameron`, `Riley`]

app.get(`/api/users`, (req,res) => {
    res.status(200).send(friends)
})

app.post(`/api/users`, (req,res) => {
    friends.push(req.body.name)
    res.status(200).send(friends)
})

app.delete(`/api/users`, (req,res) => {
    friends.splice((friends.length-1),1)
    res.status(200).send(friends)
})


app.get(`/weather/:temperature`, (req,res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(phrase)
    
})


app.listen(4000, () => console.log(`Server running on port 4000`))
