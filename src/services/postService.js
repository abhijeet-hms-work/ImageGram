import {
  countAllPosts,
  createPost,
  deletePostById,
  findAllPosts,
  updatePostById,
} from "../repositoriess/postRepository.js";

export const createPostService = async (createPostObject) => {
  // 1. Take the image of the post and upload on aws
  // 2. Get the url of the image from the aws response
  // 3. Create a post with the caption and the image url in the db using repository
  // 4. Return the post object

  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;
  // const user = createPostObject.user; //add later

  // 3. Create a post with the caption and the image url in the db using repository
  const post = await createPost(caption, image);
  return post;
};

export const getAllPostsServices = async (offset, limit) => {
  const posts = await findAllPosts(offset, limit);

  // calculate total number of posts and total no of pages
  const totalDouments = await countAllPosts();

  const totalPages = Math.ceil(totalDouments / limit);

  return {
    posts,
    totalDouments,
    totalPages,
  };
};

export const deletePostService = async (id) => {
  // call the repository function

  const response = await deletePostById(id);

  return response;
};

export const updatePostService = async (id, updateObject) => {
  // call the repository function

  const response = await updatePostById(id, updateObject);
  return response;
};
