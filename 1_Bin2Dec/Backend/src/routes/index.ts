import { Router } from "express";
import converterRouter from "./converter.routes";

const routes = Router();

routes.use('/converter',converterRouter)

export default routes