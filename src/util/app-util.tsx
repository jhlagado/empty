import devConfig from '../../config/config.json'

export const getConfigValue = (key: string): any => {
  const config = 'APP_CONFIG' in window ? (window as any).APP_CONFIG : devConfig;
  return config && config[key];
};

export const getFeatureToggle = (toggleName: string): boolean => {
  const toggles = getConfigValue('FEATURE_TOGGLES');
  return Boolean(toggles && toggles[toggleName]);
};

