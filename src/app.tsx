import * as React from 'react';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useDispatch } from 'react-redux';
import { getItemList } from './redux/actions/item-list-actions';
import { MainPage } from './main-page';
import { AnyObj } from './types';

const GlobalStyle = createGlobalStyle`

html, body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

`

const customTheme = ((theme: AnyObj) => {
  return {
    grid: {
      breakpoints: {
        xs: "767px",
        sm: "768px",
        md: "992px",
        lg: "1328px",
        xl: "1920px",
      },
      container: {
        padding: "0px",
        maxWidth: "1248px",
      }
    },
    color: {
      black: "#000",
      white: "#fff",
      red: "#c20000",
      slate: "#3a4f59",
      emerald: "#2c853c",
      amber: "#e9600e",
      sapphire: "#1e5aa3",
      grey10: "#1a1a1a",
      grey30: "#4d4d4d",
      grey50: "#808080",
      grey70: "#b3b3b3",
      grey90: "#e6e6e6",
      grey96: "#f5f5f5",
      lightGrey05: 'rgba(0,0,0,0.05)',
      lightGrey10: 'rgba(0,0,0,0.10)',
    },
    darkenPercentage: {
      hover: 0.1
    },
    font: {
      weight: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      family: {
        impact: "'SourceSansPro', Helvetica, Arial, sans-serif",
        sourcesans: "'SourceSansPro', Helvetica, Arial, sans-serif",
        accent: "Helvetica, Arial, sans-serif"
      },
      size: {
        xxs: "0.875rem",
        xs: "1rem",
        sm: "1.125rem",
        md: "1.25rem",
        lg: "1.5rem",
        xlg: "2rem",
        xxlg: "2.5rem",
        xxxlg: "3rem",
        mxlg: "4rem",
        mxxlg: "6rem"
      }
    },
    spaces: {
      xs: "8px",
      sm: "16px",
      md: "24px",
      lg: "32px",
      xlg: "40px",
      xxlg: "48px"
    },

    radius: "4px",
    icon: {
      size: {
        xxxlg: "64px",
        xxlg: "56px",
        xlg: "48px",
        lg: "40px",
        md: "32px",
        sm: "24px"
      }
    },

    bottomBarLeftMargin: '100px',
    minPageHeight: '600px',
    pageLeftMargin: '2.5rem',
    pageWidth: '1200px',
    topBarLeftMargin: '100px',
    topBarHeight: '65px',
    noticeHeight: '48px',
  };
})

export const App: React.FC<any> = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getItemList());
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={customTheme}>
        <MainPage />
      </ThemeProvider>
    </>
  );
}
App.displayName = 'App'
