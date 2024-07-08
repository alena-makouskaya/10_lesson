import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let helloMessage = 'IT-INCUBATOR.RU IT-INCUBATOR.RU!!!';
  res.send(helloMessage);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})