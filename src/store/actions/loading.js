export default function changeLoading(data) {
  return {
    type: "SET_LOADING",
    payload: data,
  };
}
