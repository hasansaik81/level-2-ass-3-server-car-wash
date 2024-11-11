import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import notFound from './app/middlewares/notFound'
const app: Application = express()

// parser
app.use(express.json())

const allowedOrigins = ['http://localhost:5173', 'https://car-wash-frontend-gules.vercel.app'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));



// app.use(cors({
//     origin: ['https://car-wash-frontend-gules.vercel.app' , 'http://localhost:5173'] ,
//     // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     credentials: true // If you need cookies or authentication headers
// }));


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
