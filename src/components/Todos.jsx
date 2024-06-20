import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useContext } from 'react'
import { readTodos } from '../utils';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import { Todo } from './Todo.jsx';
import { UserContext } from '../context/UserContext';
import { AddTodo } from './AddTodo';

export const Todos = () => {
  const { logoutUser } = useContext(UserContext);
  const [ todos, setTodos ] = useState([]);
  useEffect(() => {
    readTodos(setTodos);
  },[]);

  // console.log(todos);

  return (
    <div>
      <h2><div>MyTodos</div><LogoutIcon onClick={() => logoutUser()} /></h2>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}>
        <AddTodo />
        <List>
            {todos.map(obj => <Todo key={obj.id} {...obj} />)}
        </List>
      </Box>
    </div>
  )
}
