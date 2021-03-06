const express = require("express")
//const morgan = require("morgan")
const welcomeRouter = require("./welcome/welcome-router")
const usersRouter = require("./users/users-router")
//const deny = require("./middleware/deny")
const logger = require("./middleware/logger")

const server = express()
const port = 4000

server.use(express.json())
//server.use(morgan("combined"))
//server.use(deny())
server.use(logger("long"))

server.use(welcomeRouter)
server.use(usersRouter)
//express considers this an error middleware
//so if any error occurs in the middlewares above 
//this middleware will catch it
server.use((err, req, res, next)=>{
	console.log(err)
	res.status(500).json({
		message: "Something went wrong, please try again later",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
