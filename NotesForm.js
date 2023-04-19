import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/action';
import img1 from '../hello.gif';
import Navbar from '../Navbar';


export default function NotesForm() {

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('')

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmission(e){
    e.preventDefault();
    dispatch(addNote(title, content))
    setTitle('')
    setContent('')
    navigate('/allNotes')
  }

  return (
    <div className='formContainer'>
        <form onSubmit={handleSubmission}>
          <br></br>
          <br></br>
            Title <br/>
            <input type='text' name='title' value={title} placeholder='enter title' onChange = {(e)=> setTitle(e.target.value)} required/> <br/>
            Content <br/>
            <input type='text' name='content' value={content} placeholder='enter content' onChange = {(e)=> setContent(e.target.value)} required/> <br/>
            <br/>
            <button class="button-29" role="button" >Add note</button> 
            <button class="button-29" role="button"onClick={()=>(navigate('/allNotes'))} >View Notes</button>     
        </form>
        {/* <div className='hello'>
          <img src={img1}></img>
        </div> */}
    </div>
  )
}
