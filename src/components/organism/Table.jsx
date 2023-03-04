import TableBody from "../molecules/TableBody"
import TableHeader from "../molecules/TableHeader"

const Table = ({titles,values}) => {
  return (
    <table className="border-collapse border border-slate-400 table-auto m-auto w-11/12 my-8">
            <TableHeader titles={titles}/>
            <TableBody tableValues={values}/>
    </table>
    )
}

export default Table