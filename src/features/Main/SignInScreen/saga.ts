import { put, call } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import { createSagaSlice } from "@/utils/redux-saga-helper";
import { dispatch } from "@/utils/navigator";
import userSagaSlice from "@/features/services/user/saga";
import routes from "@/constants/routes";
import slice from "./slice";

function* submit({ payload }): Generator {
  yield put(slice.actions.setIsSubmitting(true));
  yield call(userSagaSlice.sagas.signIn, { payload });
  yield call(
    dispatch,
    NavigationActions.navigate({ routeName: routes.DashboardScreen })
  );
  yield put(slice.actions.setIsSubmitting(false));
}

const sagas = {
  submit
};

export default createSagaSlice<typeof sagas>({
  name: "SignInScreen",
  sagas
});
