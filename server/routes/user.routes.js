import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSider } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute,getUsersForSider);

export default router