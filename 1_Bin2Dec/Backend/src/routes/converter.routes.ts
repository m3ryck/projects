import { Router,Request,Response } from "express";
import ConverterService from "../services/ConverterService";

const converterRouter = Router()


converterRouter.post('/', async (req:Request,resp:Response) =>{

  const {value} = req.body
  const converter = new ConverterService();

  const response = await converter.execute({value});

  if(response){
    return resp.json({value:response});
  }else{
    return resp.status(400).send({error:'Only binary values are allowed',code:'ERR-01'})
  }
})


export default converterRouter