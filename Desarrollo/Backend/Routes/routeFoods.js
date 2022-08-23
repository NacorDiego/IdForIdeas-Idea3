const { Router } = require("express")

const routerFoods = Router()

routerFoods.get("/all", (req, res) => {
  res.json({})
})

module.exports = routerFoods
