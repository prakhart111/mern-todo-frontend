import { useState, useEffect } from "react";
import axios from "axios";
import TodoLists from "./TodoLists";
import CreateTodo from "./CreateTodo";
import Button from './Button'

export function DisplayTodo() {
  
  const [infoTodo, setInfoTodo] = useState([]);
  const [reload,setReload] = useState(0)
  
  useEffect(
    function () {
      axios
        .get("https://prakhar-todo-mern.herokuapp.com/api/todoapp")
        .then((res) => {
          setInfoTodo(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    [reload]
  );

  const deleteHandler = (e) => {
    axios.delete(
      `https://prakhar-todo-mern.herokuapp.com//api/todoapp/${e.target.name}`
    );
    setInfoTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  };

  const [filter,setFilter] = useState(false)
  const filterFunc =()=>{
    setFilter(!filter)
    console.log("Filter state:" , filter)
    return;
  }
  return (
    <section>
      <CreateTodo setReload={setReload} reload={reload}/>
      <div className='ml-7'><Button text={!filter?"Show Only Incompleted Tasks":"Show All tasks"} onClick={filterFunc}/>
      </div>
      <section className='p-3 mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10'>
          {infoTodo.map((todoInfo, index) => (
            <TodoLists
              index={index}
              todoInfos={todoInfo}
              deleteHandler={deleteHandler}
              setReload={setReload}
              reload={reload}
              filter={filter}
            />
          ))}
      </section>
    </section>
  );
}

export default DisplayTodo;
