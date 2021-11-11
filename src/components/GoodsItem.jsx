import React from 'react'

export const GoodsItem = ({
  offerId,
  displayName,
  displayType,
  price,
  displayAssets,
  addToBasket,
}) => {
  return (
    <div>
      <div className='card' >
        <div className='card-image'>
          <img src={displayAssets.map(e => e.background)} alt={displayName} />
          <span className='card-title'>{displayName}</span>
        </div>
        <div className='card-content'>
          <p>{displayType}</p>
        </div>
        <div className='card-action'>
          <button className='btn' onClick={() => addToBasket({
            id: offerId,
            name: displayName,
            price: price.regularPrice, 
          })} >купить</button>
          <span className='right'>{price.regularPrice}</span>
        </div>
      </div>
    </div>
  )
}
