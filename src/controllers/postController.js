import { createPostService } from "../services/postService.js";
export async function createPost(req, res) {
  console.log(req.file);
  // call ther service layer function

  const post = await createPostService({
    caption: req.body.caption,

    image: req.file.location,
  });

  return res.status(201).json({
    success: true,
    message: "post created successfully",
    data: post,
  });
}

export async function getAllPosts(req, res) {
  // return unimplemented

  return res.status(501).json({
    success: false,
    message: "Not Implemented",
  });
}
