import { createSlice, PayloadAction } from "redux-starter-kit";

export type State = {
  isSubmitting: boolean;
};

export const initialState: State = {
  isSubmitting: false
};

export default createSlice({
  name: "features/Main/SignInScreen/slice",
  initialState,
  reducers: {
    setIsSubmitting: (state, action: PayloadAction<boolean>): State => ({
      ...state,
      isSubmitting: action.payload
    })
  }
});
