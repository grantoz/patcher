import React from 'react'
import ContentEditable from 'react-contenteditable'

export default function Heading () {
  const [text, setText] = React.useState('Demo Recordset')

  const handleChange = evt => {
    setText(evt.target.value);
  };

  const handleBlur = () => {
    // needs to be here, so as to make react-contenteditable work with react hooks
  };

  return (
    <header data-testid="recordset-heading" className="App-header">
      <ContentEditable data-testid="recordset-heading-text"  html={text} onBlur={handleBlur} onChange={handleChange} />
    </header>
  )
}