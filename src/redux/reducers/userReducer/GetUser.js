const initialState = {
  listUser: [],
  postUser: [],
  postTags: [],
  allTags: [],
  allPost: [],
  userByCommnet: [],
  userById: {},
};

const GetUser = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, listUser: action.data };
    case "GET_USER_ID":
      return { ...state, userById: action.data };
    case "GET_USER_POST":
      return { ...state, postUser: action.data };
    case "GET_TAGS":
      return { ...state, allTags: action.data };
    case "GET_TAGS_POST":
      return { ...state, postTags: action.data };
    case "GET_POST":
      return { ...state, allPost: action.data };
    case "GET_POST_COMMENT":
      return { ...state, userByCommnet: action.data };
    default:
      return state;
  }
};

export default GetUser;
