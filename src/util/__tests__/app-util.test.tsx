import { getFeatureToggle } from '../app-util';

describe('no toggles', () => {
  it('no app config', () => {
    expect(getFeatureToggle('X')).toBe(false);
  })

  it('no feature toggle', () => {
    (window as any).APP_CONFIG.FEATURE_TOGGLES = {};

    expect(getFeatureToggle('X')).toBe(false);
  })
});

describe('feature toggle', () => {
  it('test feature toggle', () => {
    (window as any).APP_CONFIG.FEATURE_TOGGLES = {
      X: true,
      Y: false,
    };

    expect(getFeatureToggle('X')).toBe(true);
    expect(getFeatureToggle('Y')).toBe(false);
  })
});
