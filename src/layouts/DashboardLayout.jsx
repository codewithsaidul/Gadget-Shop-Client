import { Outlet } from "react-router-dom"
import Sidebar from "../components/Shared/Sidebar"


const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
        <div className="col-span-2">
            <Sidebar />
        </div>
        <div className="col-span-10">
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout