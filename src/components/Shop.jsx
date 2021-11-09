import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
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
      .then((respone) => respone.json())
      .then((data) => {

        data.shop && setGoods(data.shop)
        setLoading(false)
      })
  }, [])


  console.log(goods)

  return (
    <main className='container content'>
      {loading ? <Preloader /> : goods}
      shop
    </main>
  )
}
