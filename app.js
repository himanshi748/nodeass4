const express = require('express');
const auth = require('/route/auth')
const app = express()
app.use(express.json())
app.use('/auth', auth)
app.get('/', (req, res) => {
  res.send("this is main server")
})
app.listen(4000, () => {
  console.log("app is running")
})