import React, { useEffect, useState } from 'react'

export const Alert = ({ name, closeAlert }) => {


  useEffect(() => {
    const timerid = setTimeout(closeAlert, 3000)
    return () => {
      clearTimeout(timerid)
    }

    //eslint-disable-next-line
  }, [name])

  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  )
}
