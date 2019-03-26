import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'
import Image from 'gatsby-image'
import ProductForm from '../components/ProductForm'

//Quick styling for now 
const Wrapper = styled.div`
    position: absolute;
    display: grid;
    top: 5%;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 50px;
`
const Title = styled.p`
    color: black;
    text-decoration: none;
`
const ImageContainer = styled(Image)`
    width: 300px;
    height: 300px;
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
             <Title>{x.title}&nbsp;{x.variants[0].price}</Title>
             <ImageContainer 
               fluid={x.images[0].localFile.childImageSharp.fluid}
             />
             </Link>
           ))}
         </Wrapper>
      </div>
    )
  }
}


export const pageQuery = graphql`
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