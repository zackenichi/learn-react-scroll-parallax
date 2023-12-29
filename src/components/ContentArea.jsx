import { Grid } from '@mui/material';
import Header from './Header';

const ContentArea = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
    </Grid>
  );
};

export default ContentArea;
