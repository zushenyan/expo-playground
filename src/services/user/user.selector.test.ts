import { getUser, getEmail, getError } from "./user.selector";
import slice, { initialState } from "./user.slice";

describe("getUser", () => {
  it("should work", () => {
    expect(getUser.resultFunc(initialState)).toEqual(initialState);
  });
});

describe("getEmail", () => {
  it("should work", () => {
    const expected = "expected";
    const state = slice.reducer(initialState, slice.actions.setEmail(expected));
    expect(getEmail.resultFunc(state)).toEqual(expected);
  });
});

describe("getError", () => {
  it("should work", () => {
    const expected = "expected";
    const state = slice.reducer(initialState, slice.actions.setError(expected));
    expect(getError.resultFunc(state)).toEqual(expected);
  });
});
