import Select from 'react-select';
import Label from '../atoms/Label';

function FormSelect({options, value, name, label,setValue}) {
  return (
    <div>
        <Label htmlFor={name} label={label}/>
        <Select
            value={value}
            name={name}
            onChange={(e) => setValue(e,name)}
            options={options}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
    </div>
  )
}

export default FormSelect