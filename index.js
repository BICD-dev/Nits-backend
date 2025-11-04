import express from 'express'
import cors from 'cors'
import loginRouter from "./auth/auth.routes.js"
const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
// authentication middleware
// login route

// home route
app.get('/',(req,res)=>{
  res.send("this is the home route")
})
// login routes
app.use(loginRouter)
app.listen(PORT , () => {
  console.log('Server is running on port 3000')
})

