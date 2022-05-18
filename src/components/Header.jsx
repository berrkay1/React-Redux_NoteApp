import React from 'react'
import AddNote from './AddNote';
import {filterNote} from '../redux/NoteSlice';
import {useDispatch} from 'react-redux';

function Header() {

  

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(filterNote(e.target.value))
  }
  return (
    
    <div className='header'>
        <h1>Notes App</h1>
        <input
          
           onChange={(e)=>handleSearch(e)}
         type="text"
         placeholder='Search...' />

         <AddNote />
    </div>
  )
}

export default Header