import React, { useState } from 'react'
import { useGlobalTodoContext } from '../context/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const TodoForm = () => {
    const {handleAddSubmit} = useGlobalTodoContext()
    const [todo,setTodo] = useState('')
    
    const handleSubmit = (e)=>{
      e.preventDefault()
      handleAddSubmit(todo)
      setTodo('')
    }
  return (
    <div className='mt-12 mb-6'>
      <ToastContainer />
        <form onSubmit={handleSubmit}>
            <label className='text-sm text-gray-700 font-semibold mb-2' htmlFor="todo">Todo </label>
            <div className='flex'>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='todo' placeholder='Todo Giriniz...' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button disabled={!todo} className='px-4 py-2 bg-indigo-500 rounded-md ml-2 text-white hover:bg-indigo-800 transition-all disabled:bg-gray-200' type='submit'>Ekle</button>
            </div>
        </form>
    </div>
  )
}

export default TodoForm