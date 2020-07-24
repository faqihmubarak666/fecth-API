const initialState = {
  result: [],
};

const GetAllBook = (state = initialState, action) => {
  switch (action.type) {
    case "GETALLBOOK":
      return { ...state, result: action.data };

    default:
      return state;
  }
};

export default GetAllBook;
