import { ButtonProps } from '@material-ui/core/Button/Button';
import * as React from 'react';

export interface IProps {
  loading?: boolean;
}

declare const LoadingButton: React.FunctionComponent<IProps & ButtonProps>;
declare const GreenThemedLoadingButton: React.FunctionComponent<
  IProps & ButtonProps
>;

export default LoadingButton;
export { GreenThemedLoadingButton };
