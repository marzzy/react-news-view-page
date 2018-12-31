import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, text, type, id, value, handleChange, status, flag }) => (
  <>
    <label htmlFor={label}>
      {text}
      <input
        type={type}
        className='form-control'
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
    </label>
    <span className={`${flag} status`} >{status}</span>
  </>  
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

const Textarea = ({ label, text, id, value, handleChange, status, flag }) => (
  <>
  <label htmlFor={label}>
    {text}
    <textarea
      id={id}
      value={value} 
      onChange={handleChange}
      required
    />
  </label>
  <span className={`${flag} status`} >{status}</span>
  </>
)

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export { Input, Textarea };

