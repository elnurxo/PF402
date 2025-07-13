import { Outlet } from "react-router-dom";
import Header from "../../components/client/Header";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClientLayout;
