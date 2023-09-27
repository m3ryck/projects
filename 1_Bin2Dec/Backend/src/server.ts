import express,{Request,Response} from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
app.get('/',(req:Request,resp:Response)=>{
  resp.json({hello:'World'})
})
app.use(routes)
app.listen(3333, ()=>{console.log('🚀Server started on port 3333!🚀')})