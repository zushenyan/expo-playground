import { createSlice, PayloadAction } from "redux-starter-kit";

interface State {
  email: string;
}

const initialState: State = {
  email: ""
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>): State => ({
      ...state,
      email: action.payload
    })
  }
});

export default {
  user: slice.reducer
};
