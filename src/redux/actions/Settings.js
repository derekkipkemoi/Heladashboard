import {
    GET_SETTINGS, SAVE_SETTINGS, SETTINGS_UPDATED, UPDATE_SETTINGS
} from '../constants/Settings'

export const saveSettings = (setting) => {
    return {
      type: SAVE_SETTINGS,
      setting
    }
  };

  export const getSettings = () => {
    return {
      type: GET_SETTINGS,
    }
  };

  export const updateSettings = (data) => {
    return {
      type: UPDATE_SETTINGS,
      payload: data
    }
  };

  export const SettingsUpdated = (message) => {
    return {
      type: SETTINGS_UPDATED,
      message
    }
  };
