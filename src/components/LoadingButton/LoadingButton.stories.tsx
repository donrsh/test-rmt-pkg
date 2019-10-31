import { storiesOf } from '@storybook/react';
import * as React from 'react';
import LoadingButton, { GreenThemedLoadingButton } from './LoadingButton';

storiesOf('Loading MUI Button', module)
  .add('loading', () => (
    <>
      <LoadingButton variant="outlined">Submit (No loading)</LoadingButton>
      <LoadingButton loading>Submit</LoadingButton>
      <LoadingButton loading color="primary">
        Submit
      </LoadingButton>
      <LoadingButton loading variant="contained">
        Submit
      </LoadingButton>
      <LoadingButton loading variant="outlined" color="primary">
        Submit
      </LoadingButton>
      <LoadingButton loading disabled>
        Submit
      </LoadingButton>
    </>
  ))
  .add('w/ fixed green theme', () => (
    <>
      <GreenThemedLoadingButton variant="outlined">
        Submit (No loading)
      </GreenThemedLoadingButton>
      <GreenThemedLoadingButton loading>Submit</GreenThemedLoadingButton>
      <GreenThemedLoadingButton loading color="primary">
        Submit
      </GreenThemedLoadingButton>
      <GreenThemedLoadingButton loading variant="contained">
        Submit
      </GreenThemedLoadingButton>
      <GreenThemedLoadingButton loading variant="outlined" color="primary">
        Submit
      </GreenThemedLoadingButton>
      <GreenThemedLoadingButton loading disabled>
        Submit
      </GreenThemedLoadingButton>
    </>
  ));
