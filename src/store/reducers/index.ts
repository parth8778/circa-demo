import { LOGIN } from "../actions/types";
const initialState: any = [];
function appReducer(
  tutorials = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return [...tutorials, payload];
    default:
      return tutorials;
  }
}
export default appReducer;
