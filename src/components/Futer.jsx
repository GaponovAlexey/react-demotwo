import React from 'react'

export const Futer = () => {
  return (
    <div>
      <footer className='page-footer'>
        <div className='footer-copyright'>
          <div className='container'>
            © { new Date().toLocaleDateString() } Copyright 
            <a className='grey-text text-lighten-4 right' href='#!'>
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
