import React from 'react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Helmet } from 'react-helmet'
const App = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-12'>
      <Helmet>
        <title>Todo List App</title>
      </Helmet>
      <Navbar/>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default App