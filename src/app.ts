import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import notFound from './app/middlewares/notFound'
const app: Application = express()

// parser
app.use(express.json())





app.use(cors({
    origin: [ "https://level2-ass5-car-wash-main.vercel.app" , 'http://localhost:5173'] ,

    
    // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // If you need cookies or authentication headers
}));




// application routes
app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Assignment 3!')
})
app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app

// http://localhost:5173

// https://level2-ass5-car-wash-main-hasansaik81-hasans-projects-3bda48be.vercel.app


