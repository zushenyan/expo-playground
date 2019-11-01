import { all } from "redux-saga/effects";
import { runWatchers } from "@/utils/redux-saga-helper";

import userSagaSlice from "@/features/services/user/saga";
import signInScreenSagaSlice from "@/features/Main/SignInScreen/saga";

function* rootSaga(): Generator {
  yield all([
    ...runWatchers(userSagaSlice.watchers),
    ...runWatchers(signInScreenSagaSlice.watchers)
  ]);
}

export default rootSaga;
