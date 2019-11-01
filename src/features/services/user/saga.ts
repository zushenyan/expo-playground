import { put, call } from "redux-saga/effects";
import { createSagaSlice } from "@/utils/redux-saga-helper";
import { signIn as signInAPI, UserResponse } from "./api";
import slice from "./slice";

function* signIn({ payload }): Generator {
  const { email, error }: UserResponse = yield call(signInAPI, {
    email: payload
  });
  if (email) {
    yield put(slice.actions.setEmail(email));
  } else {
    yield put(slice.actions.setError(error));
  }
}

export default createSagaSlice({
  name: "user/saga",
  sagas: {
    signIn
  }
});
