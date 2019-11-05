import { createSlice, PayloadAction } from "redux-starter-kit";

export interface State {
  isLoading: boolean;
}

export const initialState = {
  isLoading: false
};

export default createSlice({
  name: "features/Main/DashboardScreen/slice",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>): State => ({
      ...state,
      isLoading: action.payload
    })
  }
});
