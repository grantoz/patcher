// TableRow.js
import React from 'react'

export default function TableRow ({schema, data}) {
  return (
    <tr>
      {schema().map((item, index) => (<td key={data._id + '_' + index}>{data[item]}</td>) )}
    </tr>
  )
}