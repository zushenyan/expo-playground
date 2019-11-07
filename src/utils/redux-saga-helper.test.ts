import { testSaga } from "redux-saga-test-plan";
import { createAction } from "redux-starter-kit";
import { createSagaSlice, runWatchers } from "./redux-saga-helper";

describe("createSagaSlice", () => {
  it("should work", () => {
    const name = "foo";
    const funcName = "bar";
    const sagaSlice = createSagaSlice({
      name,
      sagas: {
        bar: function*(): Generator {
          yield;
        }
      }
    });
    expect(sagaSlice.name).toEqual(name);
    expect(sagaSlice.actions.bar()).toEqual(
      createAction(`${name}/${funcName}`)()
    );
    expect(sagaSlice.actions[funcName]).toBeDefined();
    expect(sagaSlice.sagas[funcName]).toBeDefined();
    expect(sagaSlice.watchers[funcName]).toBeDefined();
    testSaga(sagaSlice.watchers[funcName])
      .next()
      .takeLatest(`${name}/${funcName}`, sagaSlice.sagas.bar)
      .next()
      .isDone();
  });

  it("should overwrite watchers", () => {
    const name = "foo";
    const funcName = "bar";
    const sagaSlice = createSagaSlice({
      name,
      sagas: {
        [funcName]: function*(): Generator {
          yield;
        }
      },
      watchers: {
        [funcName]: function*(): Generator {
          yield;
        }
      }
    });
    testSaga(sagaSlice.watchers[funcName])
      .next()
      .next()
      .isDone();
  });
});

describe("runWatchers", () => {
  it("should work", () => {
    const watchers = {
      foo: jest.fn(() => "a"),
      bar: jest.fn(() => "b")
    };
    const result = runWatchers(watchers);
    expect(result).toEqual(["a", "b"]);
  });
});
