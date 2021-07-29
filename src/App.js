import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from'./pages/About';
import Find from './pages/Find';
import Book from './pages/Book';
import Contact from './pages/Contact';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#C41D33'
      },
      secondary: {
        main: '#FFF'
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbar />
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
      </Router>
    </ThemeProvider>
  );
};

export default App;
