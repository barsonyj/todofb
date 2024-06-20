import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteTodo, updateTodo } from '../utils';
import { EditTodo } from './EditTodo';

export const Todo = ({todo, done, id}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
    <ListItem disablePadding sx={{borderBottom:'1px solid grey'}}>
      <ListItemButton>
        <Checkbox checked={done} onClick={() => updateTodo(id, done)} />
        <ListItemText primary={todo} />
        <EditIcon onClick={() => setOpen(true)} />
        <DeleteForeverIcon sx={{color:'red'}} onClick={() => deleteTodo(id)} />
      </ListItemButton>
    </ListItem>
    {open && <EditTodo open={open} setOpen={setOpen} id={id} todo={todo} />}
    </>
    )
}