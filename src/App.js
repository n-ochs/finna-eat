import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';

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
      <>
      </>
    </ThemeProvider>
  );
}

export default App;
