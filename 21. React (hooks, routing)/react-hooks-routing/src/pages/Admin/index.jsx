import { Outlet } from "react-router-dom";
import AdminHeader from "../../layout/AdminHeader";

const AdminLayout = () => {
  return (
    <>
      {/* admin panel header */}
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminLayout;
