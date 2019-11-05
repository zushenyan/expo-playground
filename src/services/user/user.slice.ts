import { createSlice, PayloadAction } from "redux-starter-kit";

export type State = {
  email: string;
  error: string;
};

export const initialState: State = {
  email: "",
  error: ""
};

const slice = createSlice({
  name: "services/user/slice",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>): State => ({
      ...state,
      email: action.payload
    }),
    setError: (state, action: PayloadAction<string>): State => ({
      ...state,
      error: action.payload
    })
  }
});

export default slice;
