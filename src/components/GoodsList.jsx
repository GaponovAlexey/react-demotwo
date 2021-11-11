import React from 'react'
import { GoodsItem } from './GoodsItem'

export const GoodsList = ({ goods }) => {
  if (!goods.length) {
    return <h3>ничего нет</h3>
  }

  return (
    <div className='goods'>
      {goods.map((e) => (
        <GoodsItem key={e.GoodsItem} {...e} />
      ))}
    </div>
  )
}
