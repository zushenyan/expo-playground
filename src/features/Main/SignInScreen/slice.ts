import { createSlice, PayloadAction } from "redux-starter-kit";

export interface State {
  isSubmitting: boolean;
}

export const initialState = {
  isSubmitting: false
};

export default createSlice({
  name: "features/SignInScreen",
  initialState,
  reducers: {
    setIsSubmitting: (state, action: PayloadAction<boolean>): State => ({
      ...state,
      isSubmitting: action.payload
    })
  }
});
