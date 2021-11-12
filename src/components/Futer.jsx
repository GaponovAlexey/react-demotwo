import React from 'react'

export const Futer = () => {
  return (
    <div>
      <footer className='page-footer grey lighten-1 '>
        <div className='footer-copyright'>
          <div className='container'>
            © { new Date().toLocaleDateString() } Copyright 
            <a className='grey-text text-lighten-4 right' href='https://github.com/kekelberi/react-demotwo'>
              rep
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
