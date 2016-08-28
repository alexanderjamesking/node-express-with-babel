import express from 'express'

var app = express()
const port = 3000

app.use(express.static('public'));

app.get('/ping', (req, res) => res.send("Ping OK!"))

app.listen(port, () => console.log('Example app listening on port 3000!'))