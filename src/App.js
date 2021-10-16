import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import CardsContainer from './components/CardsContainer/CardsContainer';
import PageFooter from './components/PageFooter/PageFooter';
import { GlobalStyles } from './theme/globalStyles';
import { useTheme } from './theme/useTheme';
import { StyledContainer, StyledHeader } from './App.style.js';

function App() {
  // get the selected theme and font-list
  const { theme, themeLoaded, getFonts } = useTheme();
  const [ selectedTheme, setSelectedTheme ] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  // load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    })
  });

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles />
        <StyledContainer theme ={ selectedTheme }>
          <StyledHeader>Theme Switcher</StyledHeader>
          <CardsContainer setter={ setSelectedTheme } currentTheme ={ selectedTheme } />
          <PageFooter theme ={ selectedTheme }/>
        </StyledContainer>
      </ThemeProvider>
    }
    </>
  );
}

export default App;