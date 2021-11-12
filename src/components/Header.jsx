import React from 'react'

export const Header = () => {
  return (
    <div>
      <nav className='grey lighten-1' >
        <div className='nav-wrapper grey lighten-1 '>
          {/* <a href='#' className='brand-logo'>
            Shop
          </a> */}
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Logo</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
