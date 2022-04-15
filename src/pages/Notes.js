import React from 'react'
import { ListItem } from '../components/ListItem'
import { notes } from '../utils/data'
import "../App.css"

export const Notes = (props) => {
  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Ro'yhat</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
        {notes.map((item) => (
          <ListItem className='notes-list' key={item.id} note = {item} />
        ))}
      </div>
    </div>
  )
}
