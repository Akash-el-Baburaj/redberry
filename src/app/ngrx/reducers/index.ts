import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { UpdateThemeSettings } from '../actions';




export const ThemeSettingsReducer = createReducer(
  {
    "theme": {
      "theme_id": 1001,
      "name": "stori-store-v1.0",
      "style": "fashion-store-v1"
    },
    "welcomebar": {
      "enabled": true,
      "support": {
        "code": "00",
        "phone": "3316977720",
        "enabled": true
      },
      "messages": {
        "data": [
          "Free shipping for order over $200",
          "We return money within 30 days",
          "Friendly 24/7 customer support"
        ],
        "enabled": true
      },
      "ordertracking": {
        "url": "/shop/ordertracking",
        "enabled": true
      }
    },
    "header": {
      "logo": {
        "enabled": true,
        "url": "cdnlink"
      },
      "search": {
        "placeholder": "Search for Products",
        "enabled": true
      }
    }
  },
  on(UpdateThemeSettings,(state,{settings}) => ({...state,settings}))
  )

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [
  
];

export const reducers: ActionReducerMap<State> = {
  ThemeSettings:ThemeSettingsReducer
};

export interface State {
  ThemeSettings:ThemeSettings
}

export interface ThemeSettings {
  theme: Theme
  welcomebar: Welcomebar
  header: Header
}

export interface Theme {
  theme_id: number
  name: string
  style: string
}

export interface Welcomebar {
  enabled: boolean
  support: Support
  messages: Messages
  ordertracking: Ordertracking
}

export interface Support {
  code: string
  phone: string
  enabled: boolean
}

export interface Messages {
  data: string[]
  enabled: boolean
}

export interface Ordertracking {
  url: string
  enabled: boolean
}

export interface Header {
  logo: Logo
  search: Search
}

export interface Logo {
  enabled: boolean
  url: string
}

export interface Search {
  placeholder: string
  enabled: boolean
}
