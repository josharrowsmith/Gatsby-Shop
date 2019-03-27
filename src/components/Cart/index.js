import React, { useContext } from 'react'
import styled from 'styled-components';

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

const Wrapper = styled.div`
    position: absolute;
    display: grid;
    top: 5%;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 50px;
`

const Cart = () => {
  const context = useContext(StoreContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <Wrapper>
      {line_items}
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <br />
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <br />
      <button style={{width: "100px", height: "50px"}}onClick={handleCheckout}>Check out</button>
    </Wrapper>
  )
}

export default Cart
