import { Box } from '@mui/material';

const FullPage = (props) => {
  const { children } = props;

  return <Box sx={{ height: '100vh' }}>{children}</Box>;
};

export default FullPage;
