import React, { useContext } from 'react'
import styled from 'styled-components';

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

const Wrapper = styled.div`
    position: absolute;
    display: grid;
    top: 10%;
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px;
`
const Header = styled.h1`
    text-transform: uppercase;
    font-size: 1.5rem;
`
const SubTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 50% 1fr 1fr;
`
const SubText = styled.h3`
    
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

const Total = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: flex-end;
    margin-right: 10%;
`
const TotalText = styled.h3`

`

const CheckoutBtn = styled.button`
    width: 150px;
    height: 50px;
    background: black;
    border-radius: 30px;
    border: 5px black solid;
    color: white;
    text-transform: uppercase;
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
      <Header>Shopping Cart</Header>
        <SubTitle>
          <SubText>Remove</SubText>
          <SubText>Item</SubText>
          <SubText>QTY</SubText>
          <SubText>PRICE</SubText>
        </SubTitle>
      <Grid>
      {line_items}
      </Grid>
      <Total>
        <TotalText>Total :  ${checkout.totalPrice}</TotalText>
        <CheckoutBtn onClick={handleCheckout}>Check out</CheckoutBtn>
      </Total>
    </Wrapper>
  )
}

export default Cart
