import React from 'react'

function Label({htmlFor,label}) {
  return (
        <label htmlFor={`id_${htmlFor}`} className="block text-sm font-medium text-gray-700" >
            {label}
        </label>
    )
}

export default Label