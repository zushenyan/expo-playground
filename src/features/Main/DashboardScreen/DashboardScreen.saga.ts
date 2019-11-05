import { put, call } from "redux-saga/effects";
import { createSagaSlice } from "@/utils/redux-saga-helper";
import { saga as randomUserSaga } from "@/services/random-user";
import slice from "./DashboardScreen.slice";

function* mount(): Generator {
  yield put(slice.actions.setIsLoading(true));
  yield call(randomUserSaga.sagas.getUsers);
  yield put(slice.actions.setIsLoading(false));
}

const sagas = {
  mount
};

export default createSagaSlice<typeof sagas>({
  name: "features/Main/DashboardScreen/saga",
  sagas
});
