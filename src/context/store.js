import { createContext, useContext,useState } from "react";
import { toast } from 'react-toastify';
const TodoContext = createContext()

export const TodoContextProvider = ({children})=>{
  
    const [todos,setTodos] = useState([{id:1,todo:'elma al',checked:false}])

    

    const handleAddSubmit = (todo)=>{
      setTodos(prevState=>[...prevState,{id:new Date().getTime(),todo:todo,checked:false}])
      toast.success("Başarıyla Eklendi !",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }

    const deleteTodo = (id)=>{
      const newTodos = todos.filter(todo=>todo.id !== id)
      setTodos(newTodos)
      toast.success("Başarıyla Silindi !",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }

    const changeHandle = (id)=>{
      setTodos(todos.map(todo=>todo.id=== id ? {...todo,checked:!todo.checked}:todo))
    
  }

    const checkedDelete = ()=>{
      setTodos(todos.filter(todo => !todo.checked))
      toast.success("Başarıyla Silindi !",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }

    

    return <TodoContext.Provider value={{todos,handleAddSubmit,deleteTodo,changeHandle,checkedDelete}}>{children}</TodoContext.Provider>
}


export const useGlobalTodoContext = ()=>{
    return useContext(TodoContext)
}