// TableHeaderInput.js
import React from 'react'

export default function TableHeaderInput ({attribute, filterItems}) {
  return (<input type="text" data-attribute={attribute} onChange={filterItems}></input>)
}