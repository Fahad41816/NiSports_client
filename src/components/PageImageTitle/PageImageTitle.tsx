/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom"
import TitleImage from "../../assets/images/PageHeadIMage.jpg"

const PageImageTitle = ({Location} : any) => {
  return (
    <div className="relative h-[200px]">
        <div className="w-full h-[200px] flex flex-col items-start justify-start p-10 absolute bg-black bg-opacity-55">
            <h1 className="font-bold mt-10 text-4xl text-white">{Location}</h1>
           <p className="text-white mt-5 text-lg font-semibold"> <NavLink to={'/'}>Home</NavLink> / <span className="text-blue-600 cursor-default">{Location}</span></p> 
        </div>
        <img className="w-full object-fill h-[200px]" src={TitleImage} alt=""  />
    </div>
  )
}

export default PageImageTitle