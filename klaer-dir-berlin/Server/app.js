const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3001
const connectdb = require('./Config/db.js')
const controller = require('./Controller/controller.js')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/login", controller.login)

app.post("/susLocs", controller.insertLocation)
app.get("/susLocs", controller.getAllLocation)
app.get("/susLocs/:id", controller.getLocationByID)
app.put("/susLocs/:id", controller.editLocationByID)
app.delete("/susLocs/:id", controller.deleteLocationByID)
connectdb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})