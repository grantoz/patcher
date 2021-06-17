import React from 'react'

export default function LoadPane ({loadSelect}) {

  let saved = JSON.parse(localStorage.getItem("_patcher_files")) || []

  console.log(saved)

  return (
    <div className="load-pane">
      <p>this is the load pane</p>
      {saved.map((item, index) => 
          <div key={index} onClick={loadSelect}>{item}</div>
      )}
    </div>
  )
}