import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom'

// import RedirectStore   from './stores/RedirectStore'
// import RedirectActions from './actions/RedirectActions'
// import loadFontAwesome from './scripts/font-awesome'

// import AppWrapper from './components/AppWrapper'
// import '../assets/stylesheets/application.scss'

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * This is also the entry point for react router, declare any
 * of your top-level routes here.
 */
@withRouter
export default class App extends Component {

  render() {
    return (
      <div>THINGS</div>
    )
  }
}
