import { createAction } from "@ngrx/store";
import { ThemeSettings } from "../reducers";

export const UpdateThemeSettings = createAction('[Theme settings] update theme settings',(settings:any)=>({settings}))