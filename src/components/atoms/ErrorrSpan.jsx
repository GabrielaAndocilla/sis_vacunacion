import React from 'react'

const ErrorrSpan = ({children}) => <span className='block text-rose-500 my-10 w-full text-sm bg-red-200 text-center'>{children}</span>

export default React.memo(ErrorrSpan)