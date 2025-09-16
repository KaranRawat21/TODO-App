import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'

import moon from "../assets/images/icon-moon.svg"
import sun from "../assets/images/icon-sun.svg";
import { toggleDarkMode } from "../redux/features/themeSlice";
export default function Header() {

  const dispatch = useDispatch();

  const isDarkMode = useSelector(state => state.theme.darkMode)

  return (
    <div
      className='w-full md:w-[500px] flex justify-between items-center'>
      <h1
        className="text-3xl tracking-[10px] text-white font-md">
        TODO</h1>
      <img
        src={isDarkMode ? sun : moon}
        className="w-6 h-6 transition-all delay-300 ease-in-out"
        onClick={() => dispatch(toggleDarkMode())} />
    </div>
  )
}
