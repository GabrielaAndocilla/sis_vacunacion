import TableDetail from "../atoms/TableDetail"

const TableBody = ({tableValues}) => {

  const tableRow = (value) => Object.keys(value).map(valueKey => (valueKey !== 'id'&& <TableDetail key={`${value.id}_${valueKey}`}>{value[valueKey]}</TableDetail>))
	
  return (
    <tbody>
			{tableValues.map(value => <tr key={value.id}>{tableRow(value)}</tr>)}
    </tbody>
  )
}

export default TableBody