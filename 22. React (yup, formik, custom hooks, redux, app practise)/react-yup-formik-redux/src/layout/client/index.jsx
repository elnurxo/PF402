// Client Layout
import { Outlet } from "react-router";
import ClientHeader from "../../components/client/Header";

const ClientLayout = () => {
  return (
    <>
      <ClientHeader />
      <Outlet />
    </>
  );
};

export default ClientLayout;
