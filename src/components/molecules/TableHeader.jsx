import TableHeaderCell from "../atoms/TableHeaderCell"

const TableHeader = ({titles}) => {

	const titleCell = () => titles.map(title => <TableHeaderCell key={`id_${title}`}>{title}</TableHeaderCell>)

  return (
    <thead>
        <tr>
					{titleCell()}
        </tr>
    </thead>
    )
}

export default TableHeader