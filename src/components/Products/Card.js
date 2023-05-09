import React from 'react'

const Card = ({ image, description, price, name }) => {
  return (
    <div className='card'>
      <img
        //src={image}
        src={image}
        alt={name}
      />
      <div className='card__body'>
        <h2 className='card__title'>{name}</h2>
        <p className='card__description'>{description}</p>
        <div className='card__price'>{`$ ${price}`}</div>
      </div>
    </div>
  )
}

export default Card
