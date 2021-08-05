import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/public-api';
import { ITEMS_PER_PAGE } from 'src/app/constants';

import { IStoreModelState } from './models';

/**
 * createInitialState
 *
 * @returns default state.
 */
export function createInitialState(): IStoreModelState {
  return {
    icons: [] as IconNamesEnum[],
    search: { skip: 0, take: ITEMS_PER_PAGE, text: '' },
  };
}
