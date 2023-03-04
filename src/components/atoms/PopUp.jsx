import React from 'react'

const errorClass = 'bg-red-200 text-center p-3 text-red-600'
const successfullClass = 'bg-emerald-300 text-center p-3 text-emerald-600'

const PopUp = ({error=false,close, children}) => {
  return (
    <div className={`relative ${error ? errorClass : successfullClass}`}>
        <button className='absolute top-0 right-5 font-black' onClick={close}>X</button>
        {children}
    </div>
  )
}
export default PopUp