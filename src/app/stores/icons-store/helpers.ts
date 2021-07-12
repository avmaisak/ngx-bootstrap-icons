import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/public-api';

import { IStoreModelState } from './models';

/**
 * createInitialState
 *
 * @returns default state.
 */
export function createInitialState(): IStoreModelState {
  return {
    icons: [] as IconNamesEnum[],
  };
}
