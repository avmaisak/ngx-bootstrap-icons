import { IStoreModelState } from './models';

/**
 * createInitialState
 *
 * @returns default state.
 */
export function createInitialState(): IStoreModelState {
  return {
    icons: [],
  };
}

export const notNullOrUndefined = <T>(value: T | null | undefined): value is T => value != null;
