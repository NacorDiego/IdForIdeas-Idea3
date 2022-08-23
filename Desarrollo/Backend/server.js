const express = require("express")

const routerFoods = require("./Routes/routeFoods")

const app = express()

app.use("/foods", routerFoods)

const PORT = "8080"
app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`)
})
