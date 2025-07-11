import React from 'react'
import { Link } from 'react-router';

const NoteCard = () => {
  return <Link to={'/note/${note._id}'}
  className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'>
    <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
            <span className='text-sm text-base-content/50'>{note.createdAt}</span>
            <div className='flex items-center gap-1'>
                <PenSquareIcon className="size-4" />

                <button className='btn btn-ghost'>
                    <Thrash2Icon className='size-4 text-red-500 hover:text-red-700 transition-colors duration-200' />
                </button>

            </div>
            
        </div>

    </div>
  </Link>
  
}

export default NoteCard