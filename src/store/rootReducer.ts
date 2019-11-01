import { combineReducers } from "redux-starter-kit";

import { default as userSlice } from "@/features/services/user/slice";
import { default as signInSlice } from "@/features/Main/SignInScreen/slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  signIn: signInSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
