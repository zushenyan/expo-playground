import { createSelector } from "redux-starter-kit";
import { RootState } from "@/store/root-reducer";
import { getRandomUsers } from "@/services/random-user";

export const getData = createSelector(
  (s: RootState) => s.dashboard,
  v => v
);

export const getIsLoading = createSelector(
  getData,
  v => v.isLoading
);

export const getUserList = createSelector(
  getRandomUsers,
  v =>
    v.map(props => ({
      avatar: props.picture.thumbnail,
      fullname: `${props.name.first} ${props.name.last}`
    }))
);
