// TableHeader.js
import React from 'react'
import TableHeaderInput from './TableHeaderInput'

export default function TableHeader ({schema, getHeaderState, filterItems}) {
  return (
    <thead>
      <tr>
        {schema.map((item, index) => (
          <td key={index}><span>{item}</span><TableHeaderInput attribute={item} getHeaderState={getHeaderState} filterItems={filterItems}/></td>
        ))}
      </tr>
    </thead>
  )
}