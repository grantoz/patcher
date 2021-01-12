// TableHeaderInput.js
import React from 'react'

export default function TableHeaderInput ({attribute, getHeaderState, filterItems}) {
  return (<input type="text" data-attribute={attribute} onChange={filterItems} value={getHeaderState(attribute)}></input>)
}