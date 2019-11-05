import { createSelector } from "redux-starter-kit";
import { RootState } from "@/store/root-reducer";

export const getSignInScreen = createSelector(
  (s: RootState) => s.signIn,
  v => v
);

export const getIsSubmitting = createSelector(
  getSignInScreen,
  v => v.isSubmitting
);
