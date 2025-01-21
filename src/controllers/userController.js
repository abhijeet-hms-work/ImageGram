import {
  signinUserService,
  signupUserService,
} from "../services/userServices.js";

export async function getProfile(req, res) {
  // return unimplemented

  return res.status(501).json({
    succes: false,
    message: "Not Implemented",
  });
}

export async function signup(req, res) {
  try {
    const user = await signupUserService(req.body);
    return res.status(201).json({
      succes: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        succes: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      succes: false,
      message: "Internal server Error",
    });
  }
}

export async function signin(req, res) {
  try {
    const response = await signinUserService(req.body);
    return res.status(200).json({
      succes: true,
      message: "User signed in successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        succes: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
}
