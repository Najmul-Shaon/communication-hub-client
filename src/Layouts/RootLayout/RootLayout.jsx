import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-119px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
