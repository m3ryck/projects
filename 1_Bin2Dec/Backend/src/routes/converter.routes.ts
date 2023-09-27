import { Router } from "express";
import ConverterService from "../services/ConverterService";

const converterRouter = Router()


converterRouter.post('/', async (req,resp) =>{
  
  const {value} = req.body

  const converter = new ConverterService();

  const decValue = await converter.execute({value});

  return resp.json(decValue);
})


export default converterRouter