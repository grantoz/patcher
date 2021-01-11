// TableHeader.js
import React from 'react'
import TableRow from './TableRow'

export default function TableBody ({schema, data}) {
  return (
    <tbody>{data.map((row, index) => (<TableRow key={index} schema={schema} data={row} />))}</tbody>
  )
}