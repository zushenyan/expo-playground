import { testSaga } from "redux-saga-test-plan";
import { saga as randomUserSaga } from "@/services/random-user";
import sagaSlice from "./DashboardScreen.saga";
import slice from "./DashboardScreen.slice";

describe("sagaSlice.sagas.mount", () => {
  it("should work", () => {
    testSaga(sagaSlice.sagas.mount)
      .next()
      .put(slice.actions.setIsLoading(true))
      .next()
      .call(randomUserSaga.sagas.getUsers)
      .next()
      .put(slice.actions.setIsLoading(false))
      .next()
      .isDone();
  });
});
