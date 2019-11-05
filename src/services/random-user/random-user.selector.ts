import { createSelector } from "redux-starter-kit";
import { RootState } from "@/store/root-reducer";

export const getData = createSelector(
  (s: RootState) => s.randomUser,
  v => v
);

export const getRandomUsers = createSelector(
  getData,
  v => v.data
);
