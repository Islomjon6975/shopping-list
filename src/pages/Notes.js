import React from 'react'
import { ListItem } from '../components/ListItem'
import { notes } from '../utils/data'

export const Notes = () => {
  return (
    <div>
      {notes.map((item) => (
        <ListItem key={item.id} note = {item} />
      ))}
    </div>
  )
}
