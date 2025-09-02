import React from 'react'

export default function Shopping cart() {
  const cartItems = [
    {
      id: 1,
      name: 'San pham 1',
      price: 100000,
      quantity: 2
    }
         {
      id: 1,
      name: 'Product 1',
      price: 12000,
      quantity: 205
    }
  ]
  const totalPrice = useMeno(() => {
    return cartItems.reduce((acc, curentValue) => {

    })
  })
  return (
    <div>
      Bai tap 1
    </div>
  )
}
