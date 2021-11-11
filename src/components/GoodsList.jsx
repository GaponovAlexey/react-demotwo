import React from 'react'
import { GoodsItem } from './GoodsItem'

export const GoodsList = ({ goods, addToBasket }) => {
  if (!goods.length) {
    return <h3>ничего нет</h3>
  }

  return (
    <div className='goods'>
      {goods.map((e) => (
        <GoodsItem key={e.offerId} {...e} addToBasket={addToBasket} />
      ))}
    </div>
  )
}
