import React from 'react';
import { Button, CircularProgress, colors } from '@material-ui/core';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const LoadingButton = ({ loading = false, children, ...muiButtonProps }) => (
  <Button {...muiButtonProps}>
    {loading && <CircularProgress size={16} style={{ marginRight: 8 }} />}
    {children}
  </Button>
);

const greenTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.green[500],
    },
  },
});

export const GreenThemedLoadingButton = props => (
  <MuiThemeProvider theme={greenTheme}>
    <LoadingButton {...props} />
  </MuiThemeProvider>
);

export default LoadingButton;
