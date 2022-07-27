import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { useGlobalTodoContext } from '../context/store'
const TodoList = () => {
    const {todos,deleteTodo,changeHandle,checkedDelete} = useGlobalTodoContext()

    const disable = todos.map(todo => todo.checked).find(todo=> todo === true)
    

  return (
    <div className=' flex flex-col'>
        {todos.map((todo)=>(
            <div key={todo.id} className='my-2'>
                <div className='flex items-center justify-center'>
            <h2 onClick={()=>changeHandle(todo.id)} className={`${todo.checked ? 'line-through' : 'no-underline'} h-10 w-60 bg-indigo-500 rounded-md text-white cursor-pointer  text-xl  flex items-center  justify-center`} >{todo.todo}</h2>
            <FaTrashAlt onClick={()=>{deleteTodo(todo.id)}} className='text-red-600 text-2xl hover:scale-105 transition-all cursor-pointer ml-4'/>
        </div>
            </div>
        ))}
        <div className='flex justify-end'>
            <button onClick={()=>checkedDelete()} disabled={!disable} className='px-3 py-2 bg-red-600 text-white rounded-md disabled:bg-gray-300 shadow-md mt-6'>Tamamlananları Temizle</button>
        </div>
    </div>
    
  )
}

export default TodoList