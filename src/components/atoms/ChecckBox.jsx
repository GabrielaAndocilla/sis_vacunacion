import React from 'react'

const ChecckBox = ({checked = false, label, setValue, ...otherProps}) => 
    <label>
        <input type="checkbox" checked={checked} onChange={(event) => setValue(!checked, event.target.name)} {...otherProps}/>
        {label}
    </label>


export default ChecckBox