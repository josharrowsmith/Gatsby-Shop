import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Header from '../components/header'
import Slider from '../components/slideShow/slider'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    top: 10%;
    width: 100%;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      top:12%;
    }
`

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const categories = this.props.data.allShopifyCollection

    return(
      <div >
        <Header categories={categories} currentPage={this.props.location.pathname}></Header>
          <Wrapper>
            <Slider/>
          </Wrapper>
      </div>
    )
  }
}

export const homeQuery = graphql`
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