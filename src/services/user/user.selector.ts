import { createSelector } from "redux-starter-kit";
import { RootState } from "@/store/root-reducer";

export const getUser = createSelector(
  (s: RootState) => s.user,
  v => v
);

export const getEmail = createSelector(
  getUser,
  v => v.email
);

export const getError = createSelector(
  getUser,
  v => v.error
);
