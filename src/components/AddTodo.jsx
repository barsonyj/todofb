import { Box, TextField } from '@mui/material'
import React from 'react'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useRef } from 'react';
import { addTodo } from '../utils';

export const AddTodo = () => {
  const inputRef = useRef({});

  const handleAdd = () => {
      if (!inputRef.current.value) return;
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
  }

  return (
    <Box sx={{ marginTop:"10px" }} >
      <TextField id="outlined-search" label="Feladat" type="search" inputRef={inputRef} /> {/* inputRef properties! */}
      <NoteAddIcon sx={{ fontSize:'3rem', color:'green', cursor:'pointer' }} onClick={handleAdd} />
    </Box>
  )
}
