import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({description,title,id}) => {
  return (
    <div className='border m-2 border-blue-600 rounded-md p-3 bg-slate-100 '>
        <Link  to={`/todo/${id}`}>
            <h2 className='font-bold text-2xl text-cyan-400 capitalize'>{description}</h2>
        </Link>
      <h2>{title}</h2>
    </div>
  )
}

export default Card
