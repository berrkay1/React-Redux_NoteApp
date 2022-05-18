import {configureStore} from '@reduxjs/toolkit';
import NoteSlice from '../redux/NoteSlice';

export const store = configureStore({
    reducer:{
        note:NoteSlice,
    }
})