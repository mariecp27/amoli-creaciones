import React, { useEffect, useState } from 'react'
import Card from './Card'
import { db } from '../../config'
import { collection, getDocs } from 'firebase/firestore'

export const Products = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'))
      const productsList = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setProducts(productsList)
    } catch (error) {
      console.log('Error al obtener los productos:', error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='products'>
      {products.map((product) => (
        <Card
          {...product}
          key={product.id}
        />
      ))}
    </div>
  )
}
