import React from 'react'

export const Preloader = () => {
  return (
    <div>
      <div className='progress'>
        <div className='determinate' style={{width: '70%'}}></div>
      </div>
    </div>
  )
}
