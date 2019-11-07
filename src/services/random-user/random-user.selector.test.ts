import { getData, getRandomUsers } from "./random-user.selector";
import slice, { initialState } from "./random-user.slice";

describe("getData", () => {
  it("should work", () => {
    expect(getData.resultFunc(initialState)).toEqual(initialState);
  });
});

describe("getRandomUsers", () => {
  it("should work", () => {
    const expected = [];
    const state = slice.reducer(initialState, slice.actions.setData(expected));
    expect(getRandomUsers.resultFunc(state)).toEqual(expected);
  });
});
