import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)

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
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
      shop
    </main>
  )
}
