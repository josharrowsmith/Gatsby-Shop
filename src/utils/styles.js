import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled-base'
import { Global, css } from "@emotion/core"

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
      }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)
