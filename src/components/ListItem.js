import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ListItem = (props) => {
    const navigate = useNavigate()
  return (
    <div>
        <p onClick={()=> navigate(`/note/:${props.note.id}`)}>{props.note.body}</p>
    </div>
  )
}
