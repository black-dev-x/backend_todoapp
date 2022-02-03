import React from 'react'
import { Route } from 'react-router'
import { HashRouter as Router } from 'react-router-dom'
import About from './About'
import Todo from './Todo'

const Routes = () => {
  return (
    <Router>
      <Route path='/todos' component={Todo} />
      <Route path='/about' component={About} />
      <Route from='*' to='/todos'></Route>
    </Router>
  )
}

export default Routes
