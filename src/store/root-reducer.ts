import { combineReducers } from "redux-starter-kit";

import { slice as userSlice } from "@/services/user";
import { slice as randomeUserSlice } from "@/services/random-user";

import { slice as signInScreenSlice } from "@/features/Main/SignInScreen";
import { slice as dashboardScreenSlice } from "@/features/Main/DashboardScreen";

const rootReducer = combineReducers({
  // services
  user: userSlice.reducer,
  randomUser: randomeUserSlice.reducer,

  // features
  signIn: signInScreenSlice.reducer,
  dashboard: dashboardScreenSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
