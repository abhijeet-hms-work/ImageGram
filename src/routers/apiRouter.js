import express from "express";

import postRouter from "./post.js";

import userRouter from "./user.js";

const router = express.Router();

router.use("/posts", postRouter); // if in the remaining url i.e after /api,
// we have the starting with /posts, then the request is forwared to postRouter

router.use("/users", userRouter); // if in the remaining url i.e after /api,
// we have the starting with /posts, then the request is forwared to postRouter

export default router;
