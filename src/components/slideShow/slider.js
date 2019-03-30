import React from 'react'
import Carousel from 'nuka-carousel'
import styled from 'styled-components'
import Images from './images'
import Image2 from './images2'
import Image3 from './images3'

const Text = styled.div`
  color : white;
  font-size: 5rem;
  position: absolute;
  top: 37vh;
  left: -22vw;
  width: 100vw;
  height: 100%;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    left: -50vw;
    top: 20vh;
  }
`

export default class slider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(

        <Carousel 
            autoplay={false} 
            wrapAround={true}
            renderTopCenterControls={({ currentSlide }) => (
                <Text>
                Welcome this is slide {currentSlide + 1}
                </Text>
                )}
            >
            <Images/>
            <Image2/>
            <Image3/>
        </Carousel>
    )
  }
}

