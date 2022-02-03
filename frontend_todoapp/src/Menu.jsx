import React from 'react'

const Menu = props => (
  <nav className='navbar navbar-inverse bg-inverse'>
    <div className='container'>
      <a href='/' className='navbar-brand'>
        <i className='fa fa-calendar-check-o'></i>TodoApp
      </a>
      <div className='navbar-collapse collapse'>
        <ul className='nav navbar-nav'>
          <li>
            <a href='#/todos'>Todos</a>
          </li>
          <li>
            <a href='#/about'>About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Menu
