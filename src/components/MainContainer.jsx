import { useSelector } from 'react-redux'
import Header from './Header'
import ToDoContainer from './ToDoContainer'

// --text-color: #6a6c79;
//   --bg-color-mainContainer: #fafafa;
//   --bg-color-innerContainer: #ffffff

export default function MainContainer() {

  const isDarkMode = useSelector(state => state.theme.darkMode)

  return (
    <div
      className={` ${isDarkMode ? "dark" : ""} bg-[url("src/assets/images/bg-mobile-light.jpg")]
      md:bg-[url("src/assets/images/bg-desktop-light.jpg")] 
      bg-contain bg-no-repeat w-full h-screen p-6   bg-[var(--bg-color-mainContainer)] flex flex-col md:items-center transition-colors delay-300`}>
      <Header />
      <ToDoContainer />
    </div>
  )
}
