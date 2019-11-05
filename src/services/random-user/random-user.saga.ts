import { put, call } from "redux-saga/effects";
import { createSagaSlice } from "@/utils/redux-saga-helper";
import { getUsers as apiGetUsers, Users } from "./random-user.api";
import slice from "./random-user.slice";

function* getUsers(): Generator {
  const data: Users = yield call(apiGetUsers);
  yield put(slice.actions.setData(data));
}

const sagas = {
  getUsers
};

export default createSagaSlice<typeof sagas>({
  name: "services/random-user/saga",
  sagas
});
