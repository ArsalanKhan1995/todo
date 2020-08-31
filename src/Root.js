import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from 'App'

const Root = ({ store }) => (
  <Provider store={ store }>
    <React.StrictMode>
      <Router>
        <Route path="/:filter?" component={App} />
      </Router>
    </React.StrictMode>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root