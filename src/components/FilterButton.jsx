
export default function FilterButton({ buttonName, ClickedButtonName, selectedFilter }) {
  return (
    <div
      className={` ${buttonName === selectedFilter ? " text-blue-500" : ""} p-3 font-bold cursor-pointer hover:text-blue-400`}
      onClick={ClickedButtonName}>{buttonName}</div>
  )
}
