import jwt from "jsonwebtoken";
import { JWT_SCERET } from "../config/serverConfig.js";

export const generateJwtToken = (payload) => {
  return jwt.sign(payload, JWT_SCERET, {
    expiresIn: "1d",
  });
};

export const verifyJWT = (token) => {
  return jwt.verify(token, JWT_SCERET);
};
