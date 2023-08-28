import { Box, Button, Container, TextField } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

interface IAddToDoComp{
      postAddtoDo: AddFn
}
const AddToDoComp = ({postAddtoDo}: IAddToDoComp ) => {
      const [text, setText ] = useState("")

      const handleClick = () => {
            postAddtoDo(text)
        setText("")
      }
  return (
<Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}>
       <TextField
          id="outlined-basic"
          label="New Todo"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          value={text}
          onChange={(e)=> setText(e.target.value)}
          variant="outlined"
        />
        <Button
        disabled={!text.trim()}
          variant="contained"
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          onClick={handleClick}
          endIcon={<SaveIcon />}>
          Save Todo
        </Button>
      </Box>
    </Container>
  )
}

export default AddToDoComp