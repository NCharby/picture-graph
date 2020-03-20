// @flow
import { Router } from 'express'
import asyncHandler from "express-async-handler"

const AppRouter: Router<express$Request, express$Response> = Router()

// AppRouter.get('/config', Config.getPageVars);

// AppRouter.route('/upload')
//     .all(hasBearer)
//     .get( asyncHandler(File.signPut) );





export default AppRouter;