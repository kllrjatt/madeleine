/*  eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import View from './components/view';

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <View />
  </MuiThemeProvider>
  , document.getElementById('root'));
