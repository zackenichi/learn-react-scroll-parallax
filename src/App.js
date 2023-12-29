import './App.css';
import Header from './components/Header';

import Examples from './Examples';

import { Box } from '@mui/material';

const App = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: `"header" "main"`,
        // p: 2,
      }}
      id="appContainer"
      role="main"
    >
      <Box
        sx={{
          gridArea: 'header',
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridArea: 'main',
        }}
      >
        <Examples />
      </Box>
    </Box>
  );
};
export default App;
