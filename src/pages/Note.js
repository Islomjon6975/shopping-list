import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { notes } from '../utils/data'

export const Note = () => {
    const params = useParams()
    const currentNote = notes.filter((item) => item.id === Number(params.id.slice(1)))

  return (
    <div>
        <h1>Note detail {params.id}</h1>
        <p>{currentNote[0]?.body}</p>
    </div>
  )
}
