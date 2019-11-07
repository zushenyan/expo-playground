import { testSaga } from "redux-saga-test-plan";
import { NavigationActions } from "react-navigation";
import { dispatch } from "@/utils/navigator";
import { saga as userSaga } from "@/services/user";
import routes from "@/constants/routes";
import sagaSlice from "./SignInScreen.saga";
import slice from "./SignInScreen.slice";

describe("sagaSlice.submit", () => {
  it("should work", () => {
    const action = { type: "foo", payload: "bar" };
    testSaga(sagaSlice.sagas.submit, action)
      .next()
      .put(slice.actions.setIsSubmitting(true))
      .next()
      .call(userSaga.sagas.signIn, action)
      .next()
      .call(
        dispatch,
        NavigationActions.navigate({ routeName: routes.DashboardScreen })
      )
      .next()
      .put(slice.actions.setIsSubmitting(false))
      .next()
      .isDone();
  });
});
