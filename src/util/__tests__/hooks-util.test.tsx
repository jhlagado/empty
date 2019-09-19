import * as React from 'react';
import { heightResize, watchWindowWidth, updateElement } from '../hooks-util';

describe('hook util', () => {
  it('useHeightSizer ---- heightResize', () => {

    const window: any = {
      innerWidth: 100,
    };

    const element: any = {
      style: {},
      classList: {
        remove(className: string) {
          expect(className).toBe('sized');
        }
      },
    };
    const r = heightResize(window, element, (width) => expect(width).toBe(100));
    r();
    expect(element.style.height).toBe('auto');
  })

  it('useHeightSizer ---- watchWindowWidth', () => {

    let listeners = 0;

    const window: any = {
      innerWidth: 100,

      addEventListener(type: string, func: () => {}) {
        expect(type).toBe('resize');
        listeners++;
      },

      removeEventListener(type: string, func: () => {}) {
        expect(type).toBe('resize');
        listeners--;
      },

    };

    watchWindowWidth(window, { current: null }, (_width: number) => { })();
    expect(listeners).toBe(0);

    const ref = { current: {} };
    const remove = watchWindowWidth(window, ref, (_width: number) => { })();
    expect(listeners).toBe(1);
    if (remove) remove();
    expect(listeners).toBe(0);
  })

  it('useHeightSizer ---- updateElement', () => {

    const element: any = {
      style: {
        height: '100px',
      },
      offsetHeight: 50,
      classList: {
        add(className: string) {
          expect(className).toBe('sized');
        }
      },
    };

    const ref = { current: element };

    expect(element.style.height).toBe('100px');
    updateElement(ref)();
    expect(element.style.height).toBe('50px');
  })

});
