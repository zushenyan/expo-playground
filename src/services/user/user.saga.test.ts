import { testSaga } from "redux-saga-test-plan";
import sagaSlice from "./user.saga";
import { signIn as signInAPI } from "./user.api";
import slice from "./user.slice";

describe("sagaSlice.signIn", () => {
  it("should setEmail", () => {
    const action = { type: "foo", payload: "bar" };
    const email = "email";
    testSaga(sagaSlice.sagas.signIn, action)
      .next()
      .call(signInAPI, action.payload)
      .next({ email })
      .put(slice.actions.setEmail(email))
      .next()
      .isDone();
  });
  it("should setError", () => {
    const action = { type: "foo", payload: "bar" };
    const error = "error";
    testSaga(sagaSlice.sagas.signIn, action)
      .next()
      .call(signInAPI, action.payload)
      .next({ error })
      .put(slice.actions.setError(error))
      .next()
      .isDone();
  });
});
