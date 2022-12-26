import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import './App.css';
import {theme} from './Theme'
import Test from './Test';
import Dashboard from './layouts/Dashboard';
import Landing from './layouts/Landing/Landing';
import Router from './routes';
import { SnackbarProvider } from 'notistack';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'


function App() {
  return (
    <div className='App' >
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <SnackbarProvider
          maxSnack={5}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          preventDuplicate
          >
            <ErrorBoundary>
              <Router />  
            </ErrorBoundary>
          </SnackbarProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
