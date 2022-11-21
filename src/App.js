import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import './App.css';
import {theme} from './Theme'
import Test from './Test';
import Dashboard from './layouts/Dashboard';
import Landing from './layouts/Landing/Landing';
import Router from './routes';



function App() {
  return (
    <div className='App' >
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
        <Router /> 
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
