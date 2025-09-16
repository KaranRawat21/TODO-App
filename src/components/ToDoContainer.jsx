
import { useDispatch, useSelector } from "react-redux"
import FilterButton from "./FilterButton"
import Task from "./Task"
import { useState } from "react";
import { addTodo, deleteToDo, clearCompletedTasks, toggleComplete, getToDoList } from "../redux/features/toDoListSlice";
import { setFilter } from "../redux/features/filterSlice";

export default function () {

  const [value, setValue] = useState("");
  const filterButtons = ["All", "Active", "Completed"]
  const selectedFilter = useSelector(state => state.filter)

  const toDoList = useSelector(getToDoList)

  const dispatch = useDispatch();


  const addToDoFunction = () => {
    if (!value.trim()) return;
    dispatch(addTodo(value))
    setValue("")
  }

  const incompleteTasks = () => {
    return toDoList.filter(todo => todo.isComplete === false).length
  }





  return (
    <div className="flex flex-col gap-4 md:w-[500px]">

      {/* Serach div */}
      <div
        className="bg-[var(--bg-color-innerContainer)] h-13 rounded-sm flex items-center gap-4 px-5 mt-8 shadow-2xl transition-all delay-300 ease-in-out">
        <button
          className="w-6 h-6 rounded-full bg-gradient-to-b from-purple-500 via-pink-400 to-blue-400 text-4xl text-white flex justify-center items-center cursor-pointer"
          onClick={addToDoFunction}>+</button>
        <input
          type="text"
          className="w-[80%] h-full text-[var(--text-input)] text-[16px] outline-0 placeholder:text-sm"
          placeholder="Create a new todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)} />
      </div>

      {/* ToDO list div */}
      <div
        className="w-full  bg-[var(--bg-color-innerContainer)] rounded-sm  text-[var(--text-color)]  shadow-xl transition-all delay-300 ease-in-out">

        {
          toDoList.length > 0 ? <div className="max-h-[450px] overflow-auto scrollbar-hide">
            {
              toDoList.map(todo => (
                <Task
                  key={todo.id}
                  task={todo.todo}
                  onDelete={() => dispatch(deleteToDo(todo.id))}
                  toggleComplete={() => dispatch(toggleComplete(todo.id))}
                  isTaskComplete={todo.isComplete}
                />
              ))
            }


          </div> : <div
            className="h-35 flex justify-center items-center border-b" >{selectedFilter === "Completed" ? "0 task completed" : "Add Tasks!"}</div>
        }


        <div className=" text-[14px] p-4 md:px-5 md:py-1  flex justify-between items-center transition-all delay-300 ease-in-out ">
          <p className="w-24">{incompleteTasks()} tasks left</p>
          <div className="md:flex hidden md:visible">
            {
              filterButtons.map(button => (
                <FilterButton
                  key={button}
                  buttonName={button}
                  ClickedButtonName={() => dispatch(setFilter(button))}
                  selectedFilter={selectedFilter}
                />
              ))
            }
          </div>
          <button
            onClick={() => dispatch(clearCompletedTasks())}>
            Clear Completed</button>
        </div>


      </div>

      {/* filter buttons div */}
      <div className="w-full bg-[var(--bg-color-innerContainer)] rounded-sm  text-[var(--text-color)]  shadow-2xl px-10 flex justify-center text-sm md:hidden transition-all delay-300 ease-in-out">
        {/* <FilterButton buttonName="All" /> */}
        {
          filterButtons.map(button => (
            <FilterButton
              key={button}
              buttonName={button}
              ClickedButtonName={() => dispatch(setFilter(button))}
              selectedFilter={selectedFilter}
            />
          ))
        }

      </div>


      <p className=" mt-10 text-[var(--text-color)] text-center text-sm font-medium transition-all delay-300 ease-in-out">Drag and drop to reorder list</p>
    </div>
  )
}

