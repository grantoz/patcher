// TableCell.js
import React from 'react'
import ContentEditable from 'react-contenteditable'

export default function TableCell ({key, data}) {
  const [text, setText] = React.useState(data)
  const handleChange = evt => {
    setText(evt.target.value);
  };

  const handleBlur = () => {
    // needs to be here, so as to make react-contenteditable work with react hooks
  };

  return (
    <td key={key}><ContentEditable html={text} onBlur={handleBlur} onChange={handleChange} /></td>
  )
}