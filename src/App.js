import React from 'react'
import DisplayTodo from './components/DisplayTodo';

function App() {
  return (
    <div className="bg-[#171717] w-screen h-fit min-h-screen p-2 sm:p-10 flex flex-col">
      <h1 className='mx-auto text-white text-lg sm:text-xl'>To-Do List</h1>
      <DisplayTodo />
    </div>
  );
}

export default App;