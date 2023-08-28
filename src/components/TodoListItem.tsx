import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoListItem {
      todo: TodoType[];
    }
    


const TodoListItem:React.FC<ITodoListItem> = ({todo}) => {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
         <DeleteIcon />
        </IconButton>
      }>
      <ListItemText  primary={todo.todo} />
    </ListItem>
  );
}

export default TodoListItem