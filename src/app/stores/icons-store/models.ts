import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/lib/enums/icon-names.enum';
import { ISearch } from 'src/app/apis/api.model';

export interface IStoreModelState {
  icons: IconNamesEnum[],
  search: ISearch,
  selectedIcon?: IconNamesEnum,
}
