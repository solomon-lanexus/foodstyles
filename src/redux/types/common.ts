export interface IAction<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface IActionId<T extends number, P> {
  readonly type: T;
  readonly payload: P;
}
export function createAction<T extends string, P>(
  type: T,
  payload: any,
): IAction<T, P> {
  return {type, payload};
}

export function createActionId<T extends number, P>(
  type: T,
  payload: P,
): IAction<T, P> {
  return {type, payload};
}
