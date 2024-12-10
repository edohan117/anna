const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.json())

app.use(express.static('dist'))

//메모장
app.get('/api/memos', async (req, res) => {
    const result = await database.run("SELECT * FROM tests ");
    res.send(result)
});

//portfolio
app.get('/api/portfolio', async (req, res) => {
    const result = await database.run("SELECT * FROM tests ");
    res.send(result)
});

app.listen(
    port,
    () => console.log(`Example app listening at http://localhost:${port}`)
)