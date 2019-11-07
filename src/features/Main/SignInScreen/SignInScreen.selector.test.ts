import { getSignInScreen, getIsSubmitting } from "./SignInScreen.selector";
import slice, { initialState } from "./SignInScreen.slice";

describe("getSignInScreen", () => {
  it("should work", () => {
    expect(getSignInScreen.resultFunc(initialState)).toEqual(initialState);
  });
});

describe("getIsSubmitting", () => {
  it("should work", () => {
    const expected = true;
    const state = slice.reducer(
      initialState,
      slice.actions.setIsSubmitting(expected)
    );
    expect(getIsSubmitting.resultFunc(state)).toEqual(expected);
  });
});
