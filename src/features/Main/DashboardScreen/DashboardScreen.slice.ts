import { createSlice, PayloadAction } from "redux-starter-kit";

export type State = {
  isLoading: boolean;
};

export const initialState: State = {
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
