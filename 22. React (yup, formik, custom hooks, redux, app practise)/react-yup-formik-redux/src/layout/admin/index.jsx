// Admin Layout
import { Outlet } from "react-router";
import AdminHeader from "../../components/admin/Header";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <div style={{ paddingLeft: "265px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
