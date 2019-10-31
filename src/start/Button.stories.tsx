import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .add('disabled', () => <Button disabled>Hello Button</Button>)
  .add('alert', () => (
    <Button onClick={() => alert('Button clicked!')}>Alert</Button>
  ));
