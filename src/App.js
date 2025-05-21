import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0062ff',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <HeroSection />
          <MainContent />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;