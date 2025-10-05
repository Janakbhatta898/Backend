require('dotenv').config()

const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/janak',(req,res) => {
    res.send('hellow it janak bhatta')

})
app.get('/logi',(req,res) =>{
    res.send('<h1> please login at char aur code</h1>')
})
app.get('/youtube',(req,res) => {
    res.send(' please login at char aur code')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
