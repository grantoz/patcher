// TableCell.js
import React from 'react'
import ContentEditable from 'react-contenteditable'

export default function TableCell ({id, data, setCell}) {
  const [text, setText] = React.useState(data)
  const handleChange = evt => {
    setText(evt.target.value);
    setCell(id, evt.target.value);
  };

  const handleBlur = () => {
    // needs to be here, so as to make react-contenteditable work with react hooks
    // it would be nice to only update state on blur, but right now I can't seem to
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
    <td><ContentEditable html={text} onKeyDown={disableNewline} onBlur={handleBlur} onChange={handleChange} /></td>
  )
}