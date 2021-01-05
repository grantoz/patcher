// TableHeader.js
import React from 'react'
import TableHeaderInput from './TableHeaderInput'

export default function TableHeader ({schema}) {
  return (
    <thead>
      <tr>
        {schema().map((item, index) => (
          <td key={index}><span>{item}</span><TableHeaderInput /></td>
        ))}
      </tr>
    </thead>
  )
}