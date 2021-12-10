import React from 'react'
import { TextField } from '@mui/material'

const Input = ({ id, autoComplete, value, label, name, type, setValue }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      type={type}
      label={label}
      autoComplete={autoComplete}
      name={name}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}

export default Input
