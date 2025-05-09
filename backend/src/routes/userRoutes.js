import { Router } from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getUsersForSidebar } from "../controllers/userController.js";

const router = Router();

router.route('/').get(protectRoute, getUsersForSidebar);

export default router;
