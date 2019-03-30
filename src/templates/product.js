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
    top: 15%;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 50px;
    grid-gap: 100px;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0;
        width: 100vw;
        grid-gap: 20px;
    }
`
const ImageContainer = styled(Image)`
    width: 100%;
    height: 75vh;
`

const Details = styled.div`
    justify-self: center;
    padding: 10px 0 20px 0;
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
        <ImageContainer
        fluid={products.images[0].localFile.childImageSharp.fluid}>
        </ImageContainer>
        </div>
        <Details>
        <h1>{products.title}</h1>
          <h2>Description</h2>
          <p>{products.descriptionHtml}</p>
          <ProductForm product={products}/>
        </Details>
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
