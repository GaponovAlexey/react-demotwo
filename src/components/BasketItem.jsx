import React from 'react'

export const BasketItem = ({
  id,
  minus,
  plus,
  name,
  price,
  quantity,
  removeFromBasket,
}) => {
  return (
    <li className='collection-item '>
      {name}{' '}
      <i
        onClick={() => minus(id)}
        style={{ fontSize: 12 }}
        className='large material-icons basket-quantity'
      >
        remove
      </i>
      {quantity}
      <i
        onClick={() => plus(id)}
        style={{ fontSize: 12 }}
        className='large material-icons basket-quantity'
      >
        add
      </i>
      = {price * quantity} руб
      <span href='#!' className='secondary-content'>
        <i
          className='material-icons basket-delet'
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  )
}
