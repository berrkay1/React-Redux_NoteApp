import {useState} from 'react'
import {addNote} from '../redux/NoteSlice';
import { useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import Notes from './Notes';

function AddNote() {

  const colors = ["Bisque", "  Magenta ", "LightSkyBlue ", "DarkOrange", "chartreuse",'LightSeaGreen '];

  const [title,setTitle] = useState();
  const [color,setColor] = useState('');

 const dispatch = useDispatch();
  
 

  const handleClick = (e) => {
    e.preventDefault();
    if(!title) return false;

    dispatch(addNote({id:nanoid(),title,color}))

    
    
    setTitle('');
    
  }

 
  return (
    <div className='add-note'>
      <form onSubmit={handleClick} className="text">
      <textarea
        value={title}
        onChange={(e)=>setTitle(e.target.value)} 
        placeholder='Enter your note here...'
        cols="30" rows="10">

        </textarea>
        <button >add notes</button>
      </form>
        
        <div className='colors'>
           {
             colors.map((color1,index) =>(
              <figure
              key={index}
              className='circle'
              style={{background:color1}}
              onClick={()=>setColor(color1)}
              >
                {color === color1 ? '✓' : ''}
              </figure>
             ))
           }
        </div>
        <Notes />
    </div>
  )
}

export default AddNote