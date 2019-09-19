import * as React from 'react';

export const heightResize = (window: Window, element: HTMLElement, setWidth: (width: number) => any) => () => {
  setWidth(window.innerWidth);
  element.style.height = 'auto';
  element.classList.remove('sized');
}

export const watchWindowWidth = (window: Window, ref: any, setWidth: (width: number) => any) => () => {
  if (ref && ref.current) {
    const resizeFunc = heightResize(window, (ref as any).current, setWidth);
    window.addEventListener('resize', resizeFunc);
    return () => window.removeEventListener('resize', resizeFunc);
  }
}

export const updateElement = (ref: any) => () => {
  if (ref && ref.current) {
    const element: HTMLElement = (ref as any).current;
    element.style.height = element.offsetHeight + 'px';
    element.classList.add('sized');
  }
}

/**
 * useHeightSizer - custom hook for resizing the height of an element
 * this allows elements with height: auto to be animated using CSS transitions
 * it calculates and assigns to the style of the element its height in pixels
 * it also resizes heights when the window width is changed
 *
 * @param ref - ref to element
 */
export const useHeightSizer = (ref: React.MutableRefObject<null>) => {
  const [width, setWidth] = React.useState(0);
  React.useEffect(watchWindowWidth(window, ref, setWidth), [ref.current]);
  React.useEffect(updateElement(ref), [width]);
}

