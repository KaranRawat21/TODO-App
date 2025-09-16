import crossIcon from "../assets/images/icon-cross.svg"

export default function Task({ task, onDelete, toggleComplete, isTaskComplete }) {
  return (
    <div
      className="w-full border-b p-5 flex items-center justify-between gap-3"
      onClick={toggleComplete}
      draggable="true">

      <div className={`${isTaskComplete ? "bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400" : " border border-[var(--text-color)]"} w-6 h-6 min-w-6 min-h-6 rounded-full cursor-pointer`}></div>
      <p className={` ${isTaskComplete ? "line-through text-gray-400" : ""} text-sm w-150`}>{task}</p>
      <img
        src={crossIcon}
        className="cursor-pointer"
        onClick={onDelete} />

    </div>
  )
}
