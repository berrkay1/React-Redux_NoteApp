import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {deleteNote} from '../redux/NoteSlice';

function Notes() {
  const notes = useSelector(state => state.note.items);
  const dispatch = useDispatch();

  const search = useSelector(state => state.note.filterItems);

  
  

  const handleDelete = (id) => {
    dispatch(deleteNote(id))
  }

  
  return (
    <div className="notes">
      {
        
        notes.filter(val=> val.title.toLowerCase().includes(search.toLowerCase()))
        .map(item => (
          
          <div 
          style={{background:`${item.color}`, display:'flex',justifyContent:'space-around' }} className='note-item' key={item.id}>
            
            <div className='title' >{item.title}</div>
            <div className='delete-not' onClick={()=>handleDelete(item.id)} style={{cursor:'pointer'}}>X</div>
            
          </div>
          
        ))
        
      }
       
    </div>
  )
}

export default Notes