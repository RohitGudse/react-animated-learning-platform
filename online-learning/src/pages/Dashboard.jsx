import DashboardStats from "../components/DashboardStats";
import Sidebar from "../components/Sidebar";

export default function Dashboard(){
  return(
    <div style={{display:"flex",gap:20}}>
      <Sidebar/>
      <DashboardStats/>
    </div>
  )
}