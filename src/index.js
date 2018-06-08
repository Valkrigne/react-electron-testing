import React from 'react';
import { hydrate } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from '../shared/App';
import bugsnag from 'bugsnag-js'
import createPlugin from 'bugsnag-react'

const key = window.env.BUGSNAG_CLIENT_KEY
const bugsnagClient = bugsnag({
  apiKey: key,
  autoCaptureSessions: false,
  releaseStage: window.env.STAGE
})

// globalize bugsnag for updates later
window.Bugsnag = bugsnagClient

const ErrorBoundary = bugsnagClient.use(createPlugin(React))

/**
 * Renders a react component into the #react-root div container.
 * Since react 16, the `hydrate` method is used instead of `render` when dealing
 * with server side rendering.
 *
 * @param Component React component that should be rendered
 */
const renderComponent = Component => {
  hydrate(
    <ErrorBoundary>
      <Router>
        <Component/>
      </Router>
    </ErrorBoundary>,
    document.getElementById('main')
  );
};

renderComponent(App);

/**
 * This script provides hot module reloading in development mode.
 */
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('../shared/App', () => {
    const App = require('../shared/App').default;
    renderComponent(App);

  });
}
