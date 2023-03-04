import React from 'react'
import Paragraph from '../atoms/Paragraph'
import SubTitle from '../atoms/SubTitle'

const FormSectionTitle = ({title, description}) => {
  return (
    <div className='md:col-span-1'>
        <div className='px-4 sm:px-0'>
            <SubTitle>{title}</SubTitle>
            <Paragraph>{description}</Paragraph>
        </div>
    </div>
  )
}

export default FormSectionTitle