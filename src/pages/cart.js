import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Cart from '../components/Cart/index'


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

export const cartQuery = graphql`
  query cartQuery {
    allShopifyCollection {
      edges {
        node {
          handle
      } 
    }
  }
}
`