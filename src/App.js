import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import ThemeCard from './components/ThemeCard/ThemeCard';
import { GlobalStyles } from './theme/globalStyles';
import { useTheme } from './theme/useTheme';
import './App.css';

// create a container
const Container = styled.div`
  margin: 4rem auto 1rem auto;
`;

const Header = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 5rem;
`;

function App() {
  // get the selected theme and font-list
  const { theme, themeLoaded, getFonts } = useTheme();
  const [ selectedTheme, setSelectedTheme ] = useState(theme);
  const [ newTheme, setNewTheme ] = useState();

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
    setNewTheme(newTheme);
  }

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles />
        <Container style={{fontFamily: selectedTheme.font}}>
          <Header>Theme Builder</Header>
          <ThemeCard setter={ setSelectedTheme } currentTheme ={ selectedTheme } newTheme={ newTheme } />
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
