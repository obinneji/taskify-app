import { Link } from "react-router-dom"
const Header = () => {
  return (

    <nav className="bg-purple flex  flex-col sm:flex-row sm:justify-between px-20 py-5 sm:items-center">
      <h3 className="font-krona text-white text-xl font-normal">Taskify</h3>
      <ul className="flex flex-col sm:flex-row gap-5 sm:gap-10 mt-3">
        <li><a href="/" className="text-white font-inter font-medium text-l hover:text-white hover:bg-purple hover:border-2 hover:p-3 rounded">Home</a></li>
        <li><a href="" className="text-white font-inter font-medium text-l hover:text-white hover:bg-purple hover:border-2 hover:p-3 rounded">About</a></li>
        <li><a href="" className="text-white font-inter font-medium text-l hover:bg-purple hover:border-2 hover:p-3 rounded">Features</a></li>
       
      </ul>
      <div className="flex flex-col sm:flex-row gap-5 align-center">
        <Link to='/login'><button className="bg-white text-black px-6 py-2 rounded text-ml font-inter font-medium hover:text-white hover:bg-purple border-2 ">Login</button></Link>
        <Link to='/signup'><button className="bg-white text-black px-6 py-2 rounded font-inter font-medium hover:text-white hover:bg-purple border-2 ">Sign up</button></Link>
      </div>
    </nav>
  )
}
export default Header