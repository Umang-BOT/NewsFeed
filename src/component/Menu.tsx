import { useState } from 'react'

type menuProp={
  setMenu:any
}

const Menu = (props:menuProp) => {
  const [activeMenu, setActiveMenu] = useState<string>("Home");
  return (
    <>
    <div className="flex items-center p-2 border-b border-gray-400" >
        <h1 onClick={() => {props.setMenu("Home");setActiveMenu("Home");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Home" ? "text-black" : "text-gray-500 hover:text-black"}`}>Home</h1>
        <h1 onClick={() => {props.setMenu("For you");setActiveMenu("For you");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "For you" ? "text-black" : "text-gray-500 hover:text-black"}`}>For you</h1>
        <h1 onClick={() => {props.setMenu("Following");setActiveMenu("Following");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Following" ? "text-black" : "text-gray-500 hover:text-black"}`}>Following</h1>
        <h1 onClick={() => {props.setMenu("NewsShowcase");setActiveMenu("NewsShowcase");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "NewsShowcase" ? "text-black" : "text-gray-500 hover:text-black"}`}>NewsShowcase</h1>
        <h1 className='ml-7 text-gray-700 hover:text-black cursor-pointer'>|</h1>
        <h1 onClick={() => {props.setMenu("India");setActiveMenu("India");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "India" ? "text-black" : "text-gray-500 hover:text-black"}`}>India</h1>
        <h1 onClick={() => {props.setMenu("World");setActiveMenu("World");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "World" ? "text-black" : "text-gray-500 hover:text-black"}`}>World</h1>
        <h1 onClick={() => {props.setMenu("Local");setActiveMenu("Local");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Local" ? "text-black" : "text-gray-500 hover:text-black"}`}>Local</h1>
        <h1 onClick={() => {props.setMenu("Bussiness");setActiveMenu("Bussiness");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Bussiness" ? "text-black" : "text-gray-500 hover:text-black"}`}>Bussiness</h1>
        <h1 onClick={() => {props.setMenu("Technology");setActiveMenu("Technology");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Technology" ? "text-black" : "text-gray-500 hover:text-black"}`}>Technology
</h1>
        <h1 onClick={() => {props.setMenu("Entertainment");setActiveMenu("Entertainment");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Entertainment" ? "text-black" : "text-gray-500 hover:text-black"}`}>Entertainment</h1>
        <h1 onClick={() => {props.setMenu("Sports");setActiveMenu("Sports");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Sports" ? "text-black" : "text-gray-500 hover:text-black"}`}>Sports</h1>
        <h1 onClick={() => {props.setMenu("Science");setActiveMenu("Science");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Science" ? "text-black" : "text-gray-500 hover:text-black"}`}>Science</h1>
        <h1 onClick={() => {props.setMenu("Health");setActiveMenu("Health");}}className={`ml-7 font-medium text-base cursor-pointer ${activeMenu === "Health" ? "text-black" : "text-gray-500 hover:text-black"}`}>Health</h1>
    </div>
    </>
  )
}

export default Menu