// TableHeader.js
import React from 'react'
import TableHeaderInput from './TableHeaderInput'

export default function TableHeader ({schema, filterItems}) {
  return (
    <thead>
      <tr>
        {schema().map((item, index) => (
          <td key={index}><span>{item}</span><TableHeaderInput attribute={item} filterItems={filterItems}/></td>
        ))}
      </tr>
    </thead>
  )
}