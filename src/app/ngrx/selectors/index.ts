import { createSelector } from '@ngrx/store';
import { ThemeSettings, State } from '../reducers';

export const selectThemeSettings:any = createSelector(
    (state: State) => state.ThemeSettings,
    (themesettings: any) => themesettings
  );
