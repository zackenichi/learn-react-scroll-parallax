import Scaling from './examples/Scaling';
import SimpleBanner from './examples/SimpleBanner';
import SpinHello from './examples/SpinHello';
import Spinner from './examples/Spinner';
import AdvancedBanner from './examples/AdvancedBanner';

import { Grid } from '@mui/material';

const Examples = () => {
  return (
    <div className="app-main">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>React Scroll Parallax</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>Rotations</h2>
          <Spinner />
          <SpinHello />
        </Grid>
        <Grid item xs={12}>
          <h2>Scaling</h2>
          <Scaling />
        </Grid>
        <Grid item xs={12}>
          <h2>Simple Banner</h2>
          <SimpleBanner />
        </Grid>
        <Grid item xs={12}>
          <h2>Advanced Banner</h2>
          <AdvancedBanner />
        </Grid>
      </Grid>
    </div>
  );
};

export default Examples;
