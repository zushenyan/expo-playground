import { createSlice, PayloadAction } from "redux-starter-kit";
import { Users } from "./random-user.api";

export type State = {
  data: Users;
};

export const initialState: State = {
  data: []
};

const slice = createSlice({
  name: "services/random-user/slice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Users>): State => ({
      ...state,
      data: action.payload
    })
  }
});

export default slice;
