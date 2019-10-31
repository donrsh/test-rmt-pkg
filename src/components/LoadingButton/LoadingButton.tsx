import { Button, CircularProgress, colors } from '@material-ui/core';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { ButtonProps } from '@material-ui/core/Button/Button';
import * as React from 'react';

export interface IProps {
  loading?: boolean;
}

const LoadingButton: React.FunctionComponent<IProps & ButtonProps> = ({
  loading = false,
  children,
  ...muiButtonProps
}) => (
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

export const GreenThemedLoadingButton: React.FunctionComponent<
  IProps & ButtonProps
> = props => (
  <MuiThemeProvider theme={greenTheme}>
    <LoadingButton {...props} />
  </MuiThemeProvider>
);

export default LoadingButton;
