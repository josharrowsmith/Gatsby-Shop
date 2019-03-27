import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image3 = () => (
  <StaticQuery
    query={graphql`
      query {
        Image3: file(relativePath: { eq: "3.jpg" }) {
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
       <Img fluid={data.Image3.childImageSharp.fluid} />
      </>
    )}
  />
)
export default Image3
