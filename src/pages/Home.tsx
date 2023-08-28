import { useEffect, useState } from "react"
import axios from "axios"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddToDoComp from "../components/AddToDoComp";
import TodoList from "../components/TodoList";
import { notify } from "../helper/sweetAlert";




const Home = () => {
      //?Statelerde type belirtme
      const [todos , setTodos ] = useState<TodoType[]>([])
      // ? 2 
      // const [todos , setTodos ] = useState([] as TodoType[])
      const url:string = import.meta.env.VITE_BASE_URL
      //!Fetch ile 
      // const getTodos = async () => {
      //       try {
      //         const response: Response = await fetch(`${URL}/todos`);
      //         const data: TodoType[] = await response.json();
      //         setTodos(data);
      //       } catch (err) {
      //         console.error(err);
      //       }
      //     };

  //!AXİOS ile 
const getTodos = async() => {
  
try {
      const {data} = await axios<TodoType[]>(`${url}/todos`)
      console.log(data)
      setTodos(data)
} catch (error) {
     console.log(error) 
}

}


const postAddtoDo:AddFn = async(text) => {
      try {
            await axios.post<TodoType[]>(`${url}/todos`, {todo:text, isDone:false})
           notify("Todo Eklediniz", "")
      } catch (error) {
            console.log(error)
      } finally{
            getTodos()
      }
  
}

const toggleTodo:ToggleFn = async(todo) => {
      try {
            await axios.put<TodoType[]>(`${url}/todos/${todo.id}`, {...todo, isDone: !todo.isDone})
           
      } catch (error) {
            console.log(error)
      } finally{
            getTodos()
      }
  
}

const deleteTodo: DeleteFn = async (id) => {
      try {
        await axios.delete(`${url}/todos/${id}`);
      } catch (error) {
        console.log(error);
      } finally {
        getTodos();
      }
    };


useEffect(() => {

getTodos()

}, [])


  return (
<Container >
<Typography color="error" align="center" variant="h2" component="h1" mt={3}>Todo App with Typescript</Typography>

<AddToDoComp postAddtoDo={postAddtoDo} />

<TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
</Container>
  
   
  )
}

export default Home