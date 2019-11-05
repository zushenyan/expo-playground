import { all } from "redux-saga/effects";
import { runWatchers } from "@/utils/redux-saga-helper";

import { saga as userSaga } from "@/services/user";
import { saga as randomUserSaga } from "@/services/random-user";

import { saga as signInScreenSaga } from "@/features/Main/SignInScreen";
import { saga as dashboardScreenSaga } from "@/features/Main/DashboardScreen";

function* rootSaga(): Generator {
  yield all([
    // services
    ...runWatchers(userSaga.watchers),
    ...runWatchers(randomUserSaga.watchers),

    // features
    ...runWatchers(signInScreenSaga.watchers),
    ...runWatchers(dashboardScreenSaga.watchers)
  ]);
}

export default rootSaga;
