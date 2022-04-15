import React from 'react'
import { useParams } from 'react-router-dom'
import { ListItem } from '../components/ListItem'
import { notes } from '../utils/data'

export const Notes = (props) => {
  const params = useParams()
  console.log(params.id)
  return (
    <div>
      {notes.map((item) => (
        <ListItem key={item.id} note = {item} />
      ))}
    </div>
  )
}
