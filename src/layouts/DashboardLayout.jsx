import { Outlet } from "react-router-dom"
import Sidebar from "../components/Shared/Sidebar"


const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
            <Sidebar />
        </div>
        <div className="col-span-9">
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout