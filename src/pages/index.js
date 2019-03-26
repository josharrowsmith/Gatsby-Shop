import React from 'react'
import Header from '../components/header'


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const categories = this.props.data.allShopifyCollection

    return(
      <div >
        <Header categories={categories} currentPage={this.props.location.pathname}></Header>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query homePage {
    allShopifyCollection {
      edges {
        node {
          handle
        }
      }
    }
  }
`