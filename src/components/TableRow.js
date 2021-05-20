// TableRow.js
import React from 'react'
import TableCell from './TableCell'

export default function TableRow ({schema, data, setCell}) {
  // console.log(schema)
  return (
    <tr>
      {schema.map((item, index) => {
        return (<TableCell key={data._id + '_' + index} id={data._id + '_' + schema[index]} data={data[item]} setCell={setCell}/>)})
      }
    </tr>
  )
}