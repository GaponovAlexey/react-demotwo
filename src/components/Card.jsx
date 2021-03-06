import React from 'react'

export const Card = ({ quantity = 0, handleBasketShow }) => {
  return (
    <div className='cart blue darken-4 white-text' onClick={() => handleBasketShow()} >
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>
        {quantity}</span> : ''  }
    </div>
  )
}
