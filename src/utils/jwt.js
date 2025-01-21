import jwt from "jsonwebtoken";

export const generateJwtToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SCERET, {
    expiresIn: "1d",
  });
};
