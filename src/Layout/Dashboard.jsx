import { Outlet } from "react-router-dom";
import AdminSideNav from "../pages/Dashboard/AdminSideNav";

const Dashboard = () => {
  return (
    <div className="flex ">
      <AdminSideNav></AdminSideNav>
      <main className="w-9/12 p-4">
        <Outlet></Outlet>{" "}
      </main>
    </div>
  );
};

export default Dashboard;
