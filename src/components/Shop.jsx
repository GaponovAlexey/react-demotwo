import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { Card } from './Card'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((i) => i.id === item.id)
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
        }
      })
      setOrder(newOrder)
    }
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop)
        setLoading(false)
      })
  }, [])

  return (
    <main className='container content'>
      <Card quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      shop
    </main>
  )
}
