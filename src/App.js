import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import ThemeCard from './components/ThemeCard';
import { GlobalStyles } from './theme/globalStyles';
import { useTheme } from './theme/useTheme';

// create a container
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  // get the selected theme and font-list
  const { theme, themeLoaded, getFonts } = useTheme();
  const [ selectedTheme, setSelectedTheme ] = useState(theme);
  const [newTheme, setNewTheme] = useState();

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    })
  });

  const createTheme = newTheme => {
    console.log(newTheme);
    setNewTheme(newTheme);
  }

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles />
        <Container style={{fontFamily: selectedTheme.font}}>
          <h1>Theme Builder</h1>
          <p>
            This is a theming system with a Theme Switcher and Theme Builder.
            Do you want to see the source code? <a href="/" target="_blank">GitHub</a>
          </p>
          <ThemeCard setter={ setSelectedTheme } newTheme={ newTheme } />
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
