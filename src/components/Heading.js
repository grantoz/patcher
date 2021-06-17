import React from 'react'
import ContentEditable from 'react-contenteditable'

export default function Heading ({meta}) {
  const [text, setText] = React.useState(meta.title)

  const handleChange = evt => {
    setText(evt.target.value);
    meta.title = evt.target.value;
  };

  const handleBlur = (evt) => {
    // handleChange(evt)
    // needs to be here, so as to make react-contenteditable work with react hooks
  };

  return (
    <header data-testid="recordset-heading" className="App-header">
      <ContentEditable data-testid="recordset-heading-text" html={text} onBlur={handleBlur} onChange={handleChange} />
    </header>
  )
}