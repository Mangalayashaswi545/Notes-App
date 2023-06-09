import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

export default function AllNotes() {

  const notes = useSelector((state) => state.notes)
  console.log(notes)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <>
     <button className="button-2" role="button" onClick={() => navigate('/')}>Home</button>
     <div className='d-flex'>
      {
        notes.map((note, index) => {
          return (
            <>
              <div className="card" style={{width: "18rem", margin:'2rem'}}>
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.content}</p>
                  <a href="#" className="delete" onClick={()=> dispatch(removeNote(index))}>Delete</a>
                  <a href="#" className="edit" onClick={()=> dispatch(removeNote(index))&&navigate('/editNotes')} >Edit</a>
                </div>
              </div>
            </>

          )
        })
      }

    </div>
    </>
  
  )
}
