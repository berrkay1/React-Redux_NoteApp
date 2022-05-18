import { createSlice } from "@reduxjs/toolkit";



const NoteSlice = createSlice({
    name:'note',
    initialState:{
        items:[],
        filterItems:''
    },
    reducers:{
        addNote:(state,action) =>{
            state.items.push(action.payload)
           
        },
        deleteNote:(state,action) => {
           const id = action.payload
          const filter = state.items.filter(item => item.id !== id)  
          state.items=filter
        },
        filterNote:(state,action)=>{
            state.filterItems = action.payload
        }

    }
})



export const {addNote,deleteNote,filterNote} = NoteSlice.actions;
export default NoteSlice.reducer;
