import { PayloadAction } from "redux-starter-kit";
import { put, call } from "redux-saga/effects";
import { createSagaSlice } from "@/utils/redux-saga-helper";
import { signIn as signInAPI, UserResponse } from "./user.api";
import slice from "./user.slice";

export type SignInPayload = {
  email: string;
  password: string;
};

function* signIn(action: PayloadAction<SignInPayload>): Generator {
  const { email, error }: UserResponse = yield call(signInAPI, action.payload);
  if (email) {
    yield put(slice.actions.setEmail(email));
  } else {
    yield put(slice.actions.setError(error));
  }
}

const sagas = {
  signIn
};

export default createSagaSlice<typeof sagas>({
  name: "services/user/saga",
  sagas
});
