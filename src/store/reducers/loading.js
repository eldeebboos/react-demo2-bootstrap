const initial = {
  loading: false,
};

export default function loadingReducer(state = initial, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
