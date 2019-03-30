import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        Image1: file(relativePath: { eq: "2.jpg" }) {
          childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `}
    render={data => (
      <>
       <Img fluid={data.Image1.childImageSharp.fluid} style={{height: '90vh'}}/>
      </>
    )}
  />
)
export default Image
