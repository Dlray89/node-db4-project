const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")


const recipeRouter = require("./routers/recipeRouter")
// const ingredientRouter = require("./routers/ingredient.Router")

const server = express()

server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
server.use("/api/recipes", recipeRouter)
// server.use("/api/ingredients", ingredientRouter)

server.get("/test", (req,res) => {
    res.status(200).json({message: "Server is set up"})
})

module.exports = server


