import { createSelector } from "redux-starter-kit";
import { RootState } from "@/store/rootReducer";
import { State } from "./slice";

export const getSignInScreen = createSelector(
  (s: RootState): State => s.signIn,
  v => v
);

export const getIsSubmitting = createSelector(
  getSignInScreen,
  v => v.isSubmitting
);
