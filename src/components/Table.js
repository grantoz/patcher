// Table.js
import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table ({schema, data}) {
  data = data() // this probably sucks a bit, but for now, get the test data from the test data function

  // it's ok to pass [] here, later perhaps show first page of DB results
  const [filteredItems, setfilteredItems] = React.useState(data)
  const [headerState, setHeaderState] = React.useState({})

  const alterHeaderState = (attr, value) => {
    const state = headerState
    state[attr] = value
    setHeaderState(state)
  }

  const filterItems = (e) => {
    const {dataset} = e.target
    const value = e.target.value

    alterHeaderState(dataset.attribute, value)

    const resultSets = []
    for (let attribute in headerState) {
      const regex = new RegExp(headerState[attribute], 'i')
      const matching = data.filter(row => {
        return row[attribute].match(regex) 
      })
      resultSets.push(matching);
    }

    // special case for only one filter column selected, no matching to do
    if (resultSets.length === 1) {
      setfilteredItems(resultSets[0])
    }

    // otherwise let's compute the intersection between the column result sets
    let matchIds = resultSets[0].map(row => row._id)

    // we already have the ids from the first column so no need to process the first columns again
    resultSets.shift()

    // intersection with previous column in result set
    resultSets.forEach(set => {
      const ids = set.map(row => row._id)
      matchIds = matchIds.filter(x => ids.includes(x));
    })

    const filtered = data.filter(row => matchIds.includes(row._id))

    setfilteredItems(filtered)
  }

  const getHeaderState = (attr) => {
    if (headerState.hasOwnProperty(attr)) {
      return headerState[attr]
    }
    return ''
  }

  return (
    <table>
      <TableHeader schema={schema} getHeaderState={getHeaderState} filterItems={filterItems} />
      <TableBody schema={schema} data={filteredItems} />
      </table>
  )
}