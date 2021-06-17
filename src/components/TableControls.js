// TableControls.js
import React from 'react'

export default function TableControls ({clearHeader, addRecord, save, load}) {
  return (
    <section className="tableControls">
      <button onClick={load}>Load</button>
      <button onClick={save}>Save</button>
      <button onClick={clearHeader}>Clear Inputs</button>
      <button onClick={addRecord}>Add Record</button>
    </section>
  )
}