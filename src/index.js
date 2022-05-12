import * as  express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send("GET")
})

app.post('/', (req, res) => {
  res.status(201).send("Post")
})

app.delete('/', (req, res) => {
  res.send("DELETE")
})

app.put('/', (req, res) => {
  res.send("PUT")
})

app.listen(3000)