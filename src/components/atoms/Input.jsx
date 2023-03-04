const Input = ({
    name,
    label,
    placeholder = `${label} ...`,
    setValue,
    type = 'text',
    value,
    error,
    ...otherProps
    }) =>{

    return(
        <input
        id={`id_${name}`}
        name={name}
        type={type}
        autoComplete={name}
        value={value ?? ''}
        required
        onChange={(e) => { setValue(e.target.value,name) }}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${error ? 'border-red-300' :'border-gray-300'}`}
        placeholder={placeholder}
        {...otherProps}
      />
    )
}
export default Input