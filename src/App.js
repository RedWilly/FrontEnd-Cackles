import React from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './styles/Themes';
import GlobalStyles from './styles/GlobalStyles';

import Navigation from './components/Navigation';
import About from './components/sections/About';
import Showcase from './components/sections/Showcase';
import Intro from './components/sections/Intro';
import Home from './components/sections/Home';
import Team from './components/sections/Team';

function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Intro />
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <Showcase />
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <About />
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <Team />
      </ThemeProvider>
    </>
  );
}

export default App;
