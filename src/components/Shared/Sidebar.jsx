import { Link } from "react-router-dom"


const Sidebar = () => {
  return (
    <div className="bg-gray-400 min-h-screen border-r-2 border-slate-700">
        <ul className="flex flex-col gap-4">
            <li>
                <Link to='/dashboard/overview'>Overview</Link>
            </li>
            <li>
                <Link to='/dashboard/myProducts'>My Products</Link>
            </li>
            <li>
                <Link to='/dashboard/addProducts'>Add Products</Link>
            </li>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <button type="submit">Log Out</button>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar