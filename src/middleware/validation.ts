import { Request,Response,NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors=async(req:Request, res:Response,next:NextFunction)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.sendStatus(401).json({errors:errors.array()});
    }
    next();

}
export const validateMyUserRequest=[
    body("name").isString().notEmpty().withMessage("Enter a valid String Name"),
    body("addressLine1").isString().notEmpty().withMessage("Enter a valid String Address"),
    body("city").isString().notEmpty().withMessage("Enter a valid String City"),
    body("state").isString().notEmpty().withMessage("Enter a valid String State"),
    
    body("country").isString().notEmpty().withMessage("Enter a valid String Country"),
    handleValidationErrors,
]