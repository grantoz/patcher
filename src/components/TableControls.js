// TableControls.js
import React from 'react'

export default function TableControls ({clearHeader, addRecord}) {
  return (
    <section className="tableControls">
      <button disabled>Save</button>
      <button onClick={clearHeader}>Clear Inputs</button>
      <button onClick={addRecord}>Add Record</button>
    </section>
  )
}