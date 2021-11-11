import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { Card } from './Card'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])

console.log(order);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop)
        setLoading(false)
      })
  }, [])

  return (
    <main className='container content'>
      <Card quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
      shop
    </main>
  )
}