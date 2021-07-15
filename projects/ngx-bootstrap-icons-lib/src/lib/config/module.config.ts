import { InjectionToken } from '@angular/core';

import { ColorTheme } from '../enums/color-theme.enum';
import { ColorThemeType } from '../types/color-theme.type';

/**
 * Module configuration interface.
 */
export interface IModuleConfigOptions {
  /** width */
  width?: string,

  /** height */
  height?: string,

  /** color theme */
  theme?: ColorTheme | ColorThemeType,
}

export const MODULE_CONFIG_TOKEN = new InjectionToken<IModuleConfigOptions>(
  'ngx-bootstrap-icons-module-configuration',
);
