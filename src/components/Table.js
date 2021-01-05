// Table.js
import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export default function Table ({schema, data, color}) {
  console.log(typeof data);
  return (
    <table>
      <TableHeader schema={schema} />
      <tbody>{data().map((row, index) => (<TableRow key={index} schema={schema} data={row} />))}</tbody>
      </table>
    /*<button className={props.color} onClick={() => props.setColor(props.color)}>
      {props.color}
    </button>*/
  )
}