import React from 'react'

export const Header = () => {
  return (
    <div>
      <nav>
        <div className='nav-wrapper'>
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
