import express,{Request,Response,NextFunction} from 'express'
import routes from './routes'
const app = express()

app.use(express.json())
app.get('/',(req:Request,resp:Response)=>{
  console.log("Home")
  resp.json({hello:'World'})
})
app.use(routes)
app.listen(3333, ()=>{console.log('🚀Server started on port 3333!🚀')})