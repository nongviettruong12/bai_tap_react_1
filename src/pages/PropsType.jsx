import React from 'react'
import PropTypes from 'prop-types'
export const PropsType = ({name, age}) => {
  return (
    <div>
        <h2>name: {name}</h2>
        <p>age: {age}</p>
    </div>
  )
}
PropsType.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}
PropsType.defaultProps = {
    name: 'unknown',
    age:0,
}
