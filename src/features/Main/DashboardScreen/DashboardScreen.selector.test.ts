import { getData, getIsLoading, getUserList } from "./DashboardScreen.selector";
import slice, { initialState } from "./DashboardScreen.slice";

describe("getData", () => {
  it("should work", () => {
    expect(getData.resultFunc(initialState)).toEqual(initialState);
  });
});

describe("getIsLoading", () => {
  it("should work", () => {
    const expected = true;
    const state = slice.reducer(
      initialState,
      slice.actions.setIsLoading(expected)
    );
    expect(getIsLoading.resultFunc(state)).toEqual(expected);
  });
});

describe("getUserList", () => {
  it("should work", () => {
    const expected = [
      {
        name: {
          first: "first",
          last: "last"
        },
        picture: { thumbnail: "thumbnail" }
      }
    ];
    expect(getUserList.resultFunc(expected)).toEqual([
      {
        avatar: expected[0].picture.thumbnail,
        fullname: `${expected[0].name.first} ${expected[0].name.last}`
      }
    ]);
  });
});
