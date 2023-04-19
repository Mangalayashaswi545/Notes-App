import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { editNote,addNote, removeNote } from '../Redux/action';


export default function EditNotes(){
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('')
    const notes = useSelector((state) => state.notes)
    let index = notes.id
    console.log(index)
    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    function handleSubmission(e){
      e.preventDefault();
      dispatch(addNote(title, content))
      setTitle('')
      setContent('')
      navigate('/allNotes')
    }
  
    return (
      <div className='formContainer1'>
        <h3>Update your Notes</h3>
          <form onSubmit={handleSubmission} align="center">
              Title <br/>
              <input type='text' name='title' value={title} placeholder='renamed title' onChange = {(e)=> setTitle(e.target.value)} required/> <br/>
              Content <br/>
              <input type='text' name='content' value={content} placeholder='updated content' onChange = {(e)=> setContent(e.target.value)} required/> <br/>
              <br/>
              <button class="button-29" role="button">Update</button>
          </form>
      </div>
    )
  }