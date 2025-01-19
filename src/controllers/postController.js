import {
  createPostService,
  deletePostService,
  getAllPostsServices,
  updatePostService,
} from "../services/postService.js";

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

// /api/v1/posts?limit=10&offset=0
export async function getAllPosts(req, res) {
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    const paginatedPosts = await getAllPostsServices(offset, limit);

    return res.status(200).json({
      success: true,
      message: "All posts fetched succesfully",
      data: paginatedPosts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function deletePost(req, res) {
  try {
    const postId = req.params.id;
    const response = await deletePostService(postId);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "post not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "post deleted successfully",
      data: response,
    });
  } catch (error) {
    onsole.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function updatePost(req, res) {
  try {
    const updateObject = req.body;

    if (req.file) {
      updateObject.image = req.file.location;
    }

    const response = await updatePostService(req.params.id, updateObject);
    return res.status(200).json({
      success: true,
      message: "post updated successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
