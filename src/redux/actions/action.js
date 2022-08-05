import { actions } from "../reducers/reducer";

function endLoading() {
  return (dispatch) => {
    dispatch(actions.endLoading());
  };
}

export const action = {
  endLoading
};