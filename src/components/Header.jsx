import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
      <AppBar position="fixed" sx={{ background: 'green' }} elevation={1}>
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h2" component="div" sx={{ ml: 1 }}>
                Parallax Samples
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
