import React from 'react'
import Header from './Sections/Header'
import Grid from './Sections/Grid';
import Footer from './Sections/Footer';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Stack spacing={7.5}>
      <Header />
      <Grid />
      <Footer />
    </Stack>




  );
}

export default App;