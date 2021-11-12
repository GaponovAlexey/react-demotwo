import React from 'react'
import { BasketItem } from './BasketItem'

export const BasketList = ({ minus,plus, order, handleBasketShow, removeFromBasket }) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <div className='collection basket-list'>
      <div className='collection-item active'>Корзина</div>
      {order.length ? (
        order.map((item) => {
          return (
            <BasketItem
              key={item.id}
              {...item}
              minus={minus}
              plus={plus}
              removeFromBasket={removeFromBasket}
            />
          )
        })
      ) : (
        <div className='collection-item'>Корзина пуста</div>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice} руб
      </li>
      <div className='collection-item active'>
        <button className=' btn btn-small' >Оформить</button>
      </div>
      <i
        className='material-icons basket-close'
        onClick={() => handleBasketShow()}
      >
        close
      </i>
    </div>
  )
}
