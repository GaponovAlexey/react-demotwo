import React from 'react'

export const Card = ({ quantity = 0 }) => {
  return (
    <div className='cart blue darken-4 white-text' >
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>
        {quantity}</span> : ''  }
    </div>
  )
}