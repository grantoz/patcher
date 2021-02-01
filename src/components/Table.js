// Table.js
import React from 'react'
import TableControls from './TableControls'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table ({schema, data}) {
  // it's ok to pass [] here, later perhaps show first page of DB results
  const [filteredItems, setfilteredItems] = React.useState(data)
  const [headerState, setHeaderState] = React.useState({})

  const alterHeaderState = (attr, value) => {
    headerState[attr] = value
    setHeaderState(headerState)
  }

  const filterItems = (e) => {
    const {dataset, value} = e.target
    alterHeaderState(dataset.attribute, value)

    const resultSets = []
    for (let attr in headerState) {
      const regex = new RegExp(headerState[attr], 'i') // regexp because case sensitivity
      const matching = data.filter(row => {
        return row[attr].match(regex) 
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

  const clearHeader = () => {
    setHeaderState({})
    setfilteredItems(data)
  }

  const addRecord = () => {
    const record = {}
    schema.forEach(attr => {
      if (headerState.hasOwnProperty(attr)) {
        record[attr] = headerState[attr]
      } else {
        record[attr] = ''
      }
    })

    // for now let's assume that _id is a numeric sequence similar to spreadsheet rows
    if (record._id === '') {
      // TODO id handling in general could be much more elegant, also perhaps save highest id for next time
      const id = data.reduce((prev, curr, index) => {
        prev = parseInt(prev)
        curr = parseInt(curr._id)
        return (curr > prev) ? curr : prev
      }, 0)
      record._id = id + 1
    }
    data.push(record)

    clearHeader()
  }

  return (
    <>
    <TableControls clearHeader={clearHeader} addRecord={addRecord} />
    <table>
      <TableHeader schema={schema} getHeaderState={getHeaderState} filterItems={filterItems} />
      <TableBody schema={schema} data={filteredItems} />
    </table>
    </>
  )
}