import React from 'react'

export const Futer = () => {
  return (
    <div>
      <footer class='page-footer'>
        <div class='footer-copyright'>
          <div class='container'>
            © { new Date().toLocaleDateString()} Copyright 
            <a class='grey-text text-lighten-4 right' href='#!'>
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
