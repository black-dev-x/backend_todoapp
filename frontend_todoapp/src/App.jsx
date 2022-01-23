import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Todo from './Todo'
import About from './About'

const App = () => (
  <div className='container'>
    <Todo />
    <About />
  </div>
)

export default App
