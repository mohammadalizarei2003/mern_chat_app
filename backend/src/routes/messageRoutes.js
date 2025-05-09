import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = Router();

router.route('/:id').get(protectRoute, getMessages);
router.route('/send/:id').post(protectRoute, sendMessage);

export default router;
