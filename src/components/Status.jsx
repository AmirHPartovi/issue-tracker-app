import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
const Status = ({status,setStatus}) => {
    const [open, setOpen] = useState(false);
    const handleChange = (event) => {
        setStatus(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
      const possibleStatus = [
        { id: "backlog", label: "Backlog" },
        { id: "todo", label: "To-do" },
        { id: "inProgress", label: "In Progress" },
        { id: "done", label: "Done" },
        { id: "cancelled", label: "Cancelled" },
      ];
  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel>Status</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {possibleStatus.map(item=>
          <MenuItem value={item.id}>{item.label}</MenuItem>
            )}
        </Select>
      </FormControl>
  )
}

export default Status