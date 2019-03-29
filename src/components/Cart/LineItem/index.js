import React, { useContext } from 'react'
import styled from 'styled-components';
import StoreContext from '../../../context/StoreContext'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 50% 1fr 1fr;
    padding:20px 0 20px 0;
    border-top: 1px solid hsla(0,0%,39%,.1);
    border-bottom: 1px solid hsla(0,0%,39%,.1);
`

const Heading = styled.h3`

`

const Item = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
`
const Qty = styled.div`

`

const Remove = styled.div`
`

const RemoveBtn = styled.button`
    width: 50px;
    height: 50px;;
    background: white;
    color: black;
    text-transform: uppercase;
    border-radius: 50px;
    border: 1px black solid;
  
`

const Price = styled.div`
    
`

const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props
  console.log(line_item)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
      <Grid>
        <Remove>
          <RemoveBtn onClick={handleRemove}>X</RemoveBtn>
        </Remove>
        <Item>
          {variantImage}
          {line_item.title} {line_item.variant.title}
        </Item>
        <Qty>
          {line_item.quantity}
        </Qty>
        <Price>{line_item.variant.price}</Price>
      </Grid>
  )
}

export default LineItem
