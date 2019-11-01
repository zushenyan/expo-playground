import { createSelector } from "redux-starter-kit";
import { RootState } from "@/store/rootReducer";
import { State } from "./slice";

export const getUser = createSelector(
  (s: RootState): State => s.user,
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
