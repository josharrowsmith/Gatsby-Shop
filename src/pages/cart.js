import React from 'react'
import Header from '../components/header'
import Cart from '../components/cart'


export default class CartPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {    
    const categories = this.props.data.allShopifyCollection

  return (
      <div>
         <Header categories={categories} currentPage={this.props.location.pathname}/>
         <Cart/>
      </div>
    )
  }
}

export const CartQuery = graphql`
  query {
    allShopifyCollection {
      edges {
        node {
          handle
      } 
    }
  }
}
`