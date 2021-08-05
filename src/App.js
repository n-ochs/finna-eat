import { createTheme, ThemeProvider } from '@material-ui/core';
import Parking from './pages/Parking';

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
      <Parking />
    </ThemeProvider>
  );
};

export default App;
