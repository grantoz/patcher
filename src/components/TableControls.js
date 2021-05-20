// TableControls.js
import React from 'react'

export default function TableControls ({clearHeader, addRecord, save}) {
  return (
    <section className="tableControls">
      <button onClick={save}>Save</button>
      <button onClick={clearHeader}>Clear Inputs</button>
      <button onClick={addRecord}>Add Record</button>
    </section>
  )
}