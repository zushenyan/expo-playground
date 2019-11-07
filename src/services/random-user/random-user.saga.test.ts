import { testSaga } from "redux-saga-test-plan";
import { getUsers as apiGetUsers } from "./random-user.api";
import sagaSlice from "./random-user.saga";
import slice from "./random-user.slice";

describe("sagaSlice.getUsers", () => {
  it("should work", () => {
    const data = [];
    testSaga(sagaSlice.sagas.getUsers)
      .next()
      .call(apiGetUsers)
      .next(data)
      .put(slice.actions.setData(data))
      .next()
      .isDone();
  });
});
