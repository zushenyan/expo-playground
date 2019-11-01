import { takeLatest } from "redux-saga/effects";
import { createAction, ActionCreator, AnyAction } from "redux-starter-kit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Fn = (...args: any[]) => any;

export type SagaAction<T> = { [key in keyof T]: ActionCreator<AnyAction> };
export type Sagas<T> = { [key in keyof T]: Fn };
export type Watchers<T> = Sagas<T>;

export type CreateSagaSliceArguments<T> = {
  name: string;
  sagas: Sagas<T>;
  watchers?: Watchers<T>;
};

export type CreateSagaSliceReturnType<T> = CreateSagaSliceArguments<T> & {
  actions: SagaAction<T>;
};

export function createSagaSlice<T>({
  name,
  sagas,
  watchers
}: CreateSagaSliceArguments<T>): CreateSagaSliceReturnType<T> {
  const keys = Object.keys(sagas);
  const actions = {} as SagaAction<typeof sagas>;
  const tempWatchers = {};
  keys.forEach(key => {
    actions[key] = createAction(`${name}/${key}`);
    tempWatchers[key] = function*(): Generator {
      yield takeLatest(actions[key].toString(), sagas[key]);
    };
  });
  return {
    name,
    actions,
    sagas,
    watchers: {
      ...tempWatchers,
      ...watchers
    }
  };
}

export const runWatchers = (watchers: { [key: string]: Fn }): Generator[] =>
  Object.keys(watchers).map(key => watchers[key]());
