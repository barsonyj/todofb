import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { TextField } from '@mui/material';
import { updateDesc } from '../utils';

export const EditTodo = ({open, setOpen, id, todo}) => {
  const [ val, setVal] = React.useState(todo);

  const handleDone = () => {
    if (!val) return;
    updateDesc(id, val);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
           <TextField autoFocus value={val} onChange={(e) => setVal(e.target.value)} sx={{minWidth:'500px'}} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDone}>Done</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
  );
}
