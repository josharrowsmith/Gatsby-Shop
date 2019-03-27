import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'
import Image from 'gatsby-image'
import ProductForm from '../components/ProductForm'

const Wrapper = styled.div`
    position: absolute;
    display: grid;
    top: 5%;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 50px;
`
const ImageContainer = styled(Image)`
    width: 100%;
    height: 75vh;
`

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {    
    const products = this.props.data.shopifyProduct
    const categories = this.props.data.allShopifyCollection
    
  return (
      <div> 
        <Header categories={categories} currentPage={this.props.location.pathname}/>
        <Wrapper>
        <div>
        <h1>{products.title}</h1>
        <ImageContainer
        fluid={products.images[0].localFile.childImageSharp.fluid}>
        </ImageContainer>
        </div>
        <div>
          <h1>details</h1>
          <ProductForm product={products}/>
        </div>
        </Wrapper>
      </div>
    )
  }
}

export const postQuery = graphql`
  query postPage ($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
        id
        title
        handle
        productType
        descriptionHtml
        shopifyId
        options {
          id
          name
          values
        }
        variants {
          id
          title
          price
          availableForSale
          shopifyId
          selectedOptions {
            name
            value
          }
        }
        images {
          originalSrc
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      allShopifyCollection {
        edges {
          node {
            handle
          }
        }
      }
  }
`
