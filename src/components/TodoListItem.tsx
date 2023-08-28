import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoListItem {
      todo: TodoType;
      deleteTodo: DeleteFn;
      toggleTodo: ToggleFn;
    }
    


const TodoListItem:React.FC<ITodoListItem> = ({todo, deleteTodo, toggleTodo}) => {
  return (
    <ListItem
 
      disableGutters
      secondaryAction={
        <IconButton onClick={() => deleteTodo(todo.id)} aria-label="comment"
        sx={{ "&:hover": { color: "red" } }}>
         <DeleteIcon />
        </IconButton>
      }>
      <ListItemText onClick={() => toggleTodo(todo)}  primary={todo.todo} />
    </ListItem>
  );
}

export default TodoListItem