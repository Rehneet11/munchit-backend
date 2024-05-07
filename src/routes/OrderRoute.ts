import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import OrderController from "../controllers/OrderController";

const router=express.Router();

router.post("/checkout/webhook",OrderController.stripeWebhookHandeler)

router.get("/",jwtCheck,jwtParse,OrderController.getOrders)

router.post(
    "/checkout/create-checkout-session",
    jwtCheck,
    jwtParse,
    OrderController.createCheckoutSession
  );
export default router;