import express from "express";
const router = express.Router();
import {createUser} from "../controller/user.controller";

router.post("/register", createUser);
export default router;