import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, text, id, value, handleChange, status, flag }) => (
  <>
    <label htmlFor={label}>
      {text}
    </label>
    <input
      // type={type}
      className='form-control'
      id={id}
      value={value}
      onChange={handleChange}
    />
    <span className={`${flag} status`} >{status}</span>
  </>  
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  status: PropTypes.string,
  flag: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

const Textarea = ({ label, id, value, handleChange, status, flag }) => (
  <>
    <label htmlFor={label}>
      {label}
    </label>
    <textarea
      id={id}
      value={value} 
      onChange={handleChange}
      rows="7" cols="40"
    />
    <span className={`${flag} status`} >{status}</span>
  </>
)

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  status: PropTypes.string,
  flag: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

const Radio = ({label,name,value}) => (
  <>
    <input 
      type="radio" 
      name={name}
      value={value} 
    /> 
    {label}
    <br/>
  </>
)

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
}

const Submit = () => (
  <input type="submit" value="Submit" />
)


export { Input, Textarea, Submit, Radio };

