import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'
import Image from 'gatsby-image'

//Quick styling for now 
const Wrapper = styled.div`
    position: absolute;
    display: grid;
    top: 12%;
    width: 90%;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 100px;
    margin-right: 100px;
    justify-items: center;
`
const Title = styled.p`
    color: black;
    text-decoration: none;
    text-align: center;
`
const ImageContainer = styled(Image)`
    width: 400px;
    height: 400px;
`

export default class PageTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {    
    const categories = this.props.data.allShopifyCollection
    const productss = this.props.data.shopifyCollection
    
  return (
      <div>
         <Header categories={categories} currentPage={this.props.location.pathname}/>
         <Wrapper>
           {productss.products.map(x => (
            <Link to={`/product/${x.handle}/`}>
             <ImageContainer 
               fluid={x.images[0].localFile.childImageSharp.fluid}
             />
              <Title>{x.title}<br></br>{x.variants[0].price}</Title>
             </Link>
           ))}
         </Wrapper>
      </div>
    )
  }
}


export const categoryQuery = graphql`
  query categoryQuery($handle: String!) {
    allShopifyCollection {
      edges {
        node {
          handle
      } 
    }
  }
  shopifyCollection (handle: { eq: $handle }){
    products {
      title
      handle
      images {
        originalSrc
        localFile {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
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
    }
  }
}
`