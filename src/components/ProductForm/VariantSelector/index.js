import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';


const Label = styled.label`
    text-transform: uppercase;
    font-weight: 900;
    display: block;
`

const SelectSize = styled.select`
    width: 50px;
    height: 30px;
`
const VariantSelector = props => {
  const { option } = props
  return (
    <>
      <Label htmlFor={option.name}>{option.name} </Label>
      <SelectSize
        name={option.name}
        key={option.id}
        onChange={props.onChange}
      >
        {option.values.map(value => {
          return (
            <option
              value={value}
              key={`${option.name}-${value}`}
            >{`${value}`}</option>
          )
        })}
      </SelectSize>
      <br/>
    </>
  )
}

VariantSelector.propTypes = {
  onChange: PropTypes.func,
  option: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default VariantSelector
