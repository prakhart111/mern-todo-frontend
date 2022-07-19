import React from "react";
import Button from './Button'
import axios from "axios";
import tick from '../correct.png'

const TodoLists = ({ index,reload, setReload, filter,todoInfos, deleteHandler }) => {
  
  const _id = todoInfos._id;
  const title = todoInfos.title;
  const [completeState, setCompleteState] = React.useState(todoInfos.complete);
  

  const editHandler =(e)=>{
    const todoNew = {
      complete:!completeState,
    }
    setCompleteState(!completeState)
    console.log("todo New",todoNew)
    axios.put(
        `https://prakhar-todo-mern.herokuapp.com/api/todoapp/${_id}`,
        todoNew
      )
    setReload(reload +1)
     
  }
  let component = 
  (<div key={_id} className={!(completeState) ? `relative bg-[#2F2F2F] w-full pt-3 pb-3 rounded-md drop-shadow-[0_0_16px_rgba(0,0,0,0.8)]`:
   `relative bg-[#202020] w-full pt-3 pb-3 rounded-md border border-[#7ab530]`}>
  <h1 className="text-md sm:text-lg text-white p-2 ml-2 mb-2">{title}</h1>
{completeState && <img src={tick} alt='' width='32px' height='32px' className="absolute -right-4 top-5"/>}
  <div className='flex justify-between border-t-2 border-gray-600 p-3 pb-0'>
    <Button text={completeState?"Mark as incomplete":"Mark as complete"} del={completeState} name={_id} onClick={editHandler} />
    <Button text="Delete" del={true} name={_id} onClick={deleteHandler} />
      
  </div>
</div>)
  return (
    <div className="m-0 p-0">
    {((filter && !completeState) || (!filter) )?
      <div className="flex"><div className="m-0 p-1 mt-5 text-white">{index+1}.</div>{component}</div>
    :''}
    </div>
  );
};

export default TodoLists;
