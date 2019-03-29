import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image2 = () => (
  <StaticQuery
    query={graphql`
      query {
        Image2: file(relativePath: { eq: "1.jpg" }) {
          childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 1000,) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `}
    render={data => (
      <>
       <Img fluid={data.Image2.childImageSharp.fluid} />
      </>
    )}
  />
)
export default Image2
