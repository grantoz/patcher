// Table.js
import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table ({schema, data}) {
  //console.log(typeof data);
  data = data()
  //console.log(typeof data);

  const [filteredItems, setfilteredItems] = React.useState(data)

  const filterItems = (e) => {
    const current = [...data]

    const {dataset} = e.target
    // console.log(dataset.attribute)

    const regex = new RegExp(e.target.value, 'i')

    // this is where we will pass off to the DB / ORM etc
    const matching = current.filter(row => {

      // newer: filter by this column only
      return row[dataset.attribute].match(regex) 

      // older: check all values in all rows
      /*for (let key in row) {
        if (row[key].match(regex)) {
          return true;
        }
      }*/
      // return false;
    })

    setfilteredItems(matching)
  }

  return (
    <table>
      <TableHeader schema={schema} filterItems={filterItems} />
      <TableBody schema={schema} data={filteredItems} />
      </table>
    /*<button className={props.color} onClick={() => props.setColor(props.color)}>
      {props.color}
    </button>*/
  )
}