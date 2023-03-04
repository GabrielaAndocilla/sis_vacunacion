import React from 'react'
import ErrorrSpan from '../atoms/ErrorrSpan'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

function FormField({
    htmlFor,
    label,
    error,
    ...otherProps
}) {
  return (
    <div className='rounded-md shadow-sm -space-y-px items-stretch'>
        <Label htmlFor={htmlFor} label={label}/>
        <ErrorrSpan>{error}</ErrorrSpan>
        <Input name={htmlFor} label={label} error={error} {...otherProps}/>
  </div>
  )
}

export default React.memo(FormField)