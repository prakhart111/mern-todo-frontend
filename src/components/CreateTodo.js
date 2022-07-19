import { useState } from "react";
import axios from "axios";

const CreateTodo = ({reload,setReload}) => {
  const [todoInfo, setTodoInfo] = useState({ title: "", complete: false });

  function handleChange(e) {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(todoInfo)
    axios
      .post("https://prakhar-todo-mern.herokuapp.com/api/todoapp", todoInfo)
      .then((res) => {
        setTodoInfo({ title: "",  complete: false });
        console.log(res.data.message);
        setReload(reload + 1)
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
      
  }

  return (
    <section className='text-white mb-5'> 
      

      <section className='todo-data'>
        <form onSubmit={handleSubmit} className='flex flex-col ml-1 sm:ml-7' noValidate>
          <label className='p-2' htmlFor='title'>
            Add a new task in the list
          </label>
          <div  className="flex">
          <input
            type='text'
            name='title'
            placeholder="Enter the task here"
            value={todoInfo.title}
            onChange={handleChange}
            className='bg-gray-700 p-1 pl-5 text-md m-1 w-[65vw] md:w-[40vw]'
          />
          <button type='submit' className='bg-[#C620A7] rounded-md p-1 pl-3 pr-3 text-sm m-1' >
            Submit
          </button></div>
        </form>
      </section>
    </section>
  );
};

export default CreateTodo;
