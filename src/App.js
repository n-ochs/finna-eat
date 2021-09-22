import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import About from'./pages/About';
import Find from './pages/Find';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#C41D33'
      },
      secondary: {
        main: '#FFF'
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ].join(','),
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbar />
      <Hero />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/find'>
            <Find />
          </Route>
          <Route path='/book'>
            <Book />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
