// TableRow.js
import React from 'react'
import TableCell from './TableCell'

export default function TableRow ({schema, data}) {
  return (
    <tr>
      {schema.map((item, index) => <TableCell key={data._id + '_' + index} data={data[item]}/>)}
    </tr>
  )
}