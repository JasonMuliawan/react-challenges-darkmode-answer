import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
import { ModeProvider } from './hooks/useMode';

ReactDOM.render(
  <ModeProvider>
    <AppContainer>
      <Routes />
    </AppContainer>
  </ModeProvider>,
  document.getElementById('root')
);
