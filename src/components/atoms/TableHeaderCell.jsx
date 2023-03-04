import React from "react"

const TableHeaderCell = ({children}) => <th className="border border-slate-300">{children}</th>

export default React.memo(TableHeaderCell)