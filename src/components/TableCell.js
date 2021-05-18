// TableCell.js
import React from 'react'
import ContentEditable from 'react-contenteditable'

export default function TableCell ({id, data}) {
  const [text, setText] = React.useState(data)
  const handleChange = evt => {
    setText(evt.target.value);
  };

  const handleBlur = () => {
    // needs to be here, so as to make react-contenteditable work with react hooks
  };

  // TODO - pass the value back to the table component and re-filter on value change

  const disableNewline = (evt) => {
    const keyCode = evt.keyCode || evt.which
  
    if (keyCode === 13) {
      evt.returnValue = false
      if (evt.preventDefault) evt.preventDefault()

      evt.target.blur()
    }
  }

  return (
    <td key={id}><ContentEditable html={text} onKeyDown={disableNewline} onBlur={handleBlur} onChange={handleChange} /></td>
  )
}