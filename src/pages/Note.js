import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { notes } from '../utils/data'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

export const Note = () => {
    const params = useParams()
    const currentNote = notes.filter((item) => item.id === Number(params.id.slice(1)))

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
         <Link to='/'>
           <ArrowLeft />
         </Link>
         </h3>
      </div>
      <textarea value={currentNote[0]?.body}></textarea>
    </div>
  )
}
