import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { Alert } from './Alert'
import { BasketList } from './BasketList'
import { Card } from './Card'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setIsBasketShow] = useState(false)

  const [alertName, setAlertName] = useState('')

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
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    setAlertName(item.name)
  }

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow)
  }

  const removeFromBasket = (itemid) => {
    const newOrder = order.filter((el) => el.id !== itemid)
    setOrder(newOrder)
  }

  const decQuntity = (item) => {
    const newOrder = order.map((el) => {
      if (el.id === item) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const incQuntity = (item) => {
    const newOrder = order.map((el) => {
      if (el.id === item) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity,
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const closeAlert = () => {
    setAlertName('')
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
      <Card quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          minus={decQuntity}
          plus={incQuntity}
          removeFromBasket={removeFromBasket}
          handleBasketShow={handleBasketShow}
          order={order}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  )
}
