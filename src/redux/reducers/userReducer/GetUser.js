const initialState = {
  result: [],
  userById: "",
};

const GetUser = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, result: action.data };
    case "GET_USER_ID":
      return { ...state, userById: action.data };
    case "ADD_USER":
      return action.result;
    case "UPDATE_USER":
      return action.result;
    default:
      return state;
  }
};

export default GetUser;
