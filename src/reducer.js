export const initialState = {
  user: "",
  score: 0,
};

const reducer = (state, action) => {
  // console.log(action.score);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        score: state.score + action.score,
      };
    default:
      return state;
  }
};

export default reducer;
