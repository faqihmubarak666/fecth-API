const baseUrl = "https://dummyapi.io/data/api/user";
const baseUrl2 = "https://dummyapi.io/data/api/tag";
const baseUrl3 = "https://dummyapi.io/data/api/post";
const token = "icMBBaVT4Rr8kBVX2S3u";

const getAllUsers = async () => {
  const users = await fetch(baseUrl, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await users.json();
};

const getUserById = async (id) => {
  const user = await fetch(`${baseUrl}/${id}`, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await user.json();
};

const getUserByPost = async (id) => {
  const post = await fetch(`${baseUrl}/${id}/post`, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await post.json();
};

const getAllTags = async () => {
  const tags = await fetch(baseUrl2, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await tags.json();
};

const getUserByTags = async (tagTitle) => {
  const user = await fetch(`${baseUrl2}/${tagTitle}/post`, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await user.json();
};

const getAllPost = async () => {
  const tags = await fetch(baseUrl3, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await tags.json();
};

const getUserByComment = async (id) => {
  const post = await fetch(`${baseUrl3}/${id}/comment`, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await post.json();
};

export {
  getAllUsers,
  getUserById,
  getUserByPost,
  getUserByTags,
  getAllTags,
  getAllPost,
  getUserByComment,
};
